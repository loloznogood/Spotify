#!/bin/bash

set -e  # Stop on first error
cd /var/www

echo "📁 Répertoire courant : $(pwd)"

# Charger les variables d'environnement si .env existe
if [ -f .env ]; then
    set -a
    source .env
    set +a
fi

# Affichage de base
ls -la

# Composer install
if [ ! -f vendor/autoload.php ]; then
    echo "🔧 Installation des dépendances PHP..."
    if [ "$CI" = "true" ]; then
        composer install --no-interaction --no-progress --prefer-dist
    else
        composer install
    fi
fi

# NPM install
if [ ! -d node_modules ]; then
    echo "📦 Installation des dépendances Node.js..."
    if [ "$CI" = "true" ]; then
        npm ci --silent
    else
        npm ci
    fi
fi

# Build frontend
if [ "$APP_ENV" = "production" ] || [ "$CI" = "true" ]; then
    echo "🎨 Build des assets (production)..."
    npm run build
else
    echo "🎨 Build des assets (dev)..."
    npm run dev
fi

# Copie du fichier .env
if [ ! -f .env ]; then
    echo "📋 Copie de .env.example vers .env..."
    cp .env.example .env
fi

# Attente de la base de données (MySQL uniquement ici)
if [ -n "$DB_HOST" ]; then
    echo "⏳ Attente de la base de données ($DB_HOST)..."
    until mysqladmin ping -h"$DB_HOST" --silent; do
        sleep 2
    done
fi

# Génération de la clé Laravel (si manquante)
if ! grep -q "^APP_KEY=" .env; then
    echo "🔑 Génération de la clé de l'application..."
    php artisan key:generate
fi

# Configuration de .env.testing (local uniquement)
if [ "$CI" == "true" ]; then
    if [ ! -f .env.testing ]; then
        echo "📋 Copie de .env.example vers .env.testing..."
        cp .env.example .env.testing
    fi

    if ! grep -q "^APP_KEY=" .env.testing; then
        echo "🔑 Génération de la clé pour l'environnement de test..."
        php artisan key:generate --env=testing
    fi
fi

# Migration de la base
echo "📂 Migration de la base de données..."
php artisan migrate --force

# Optimisations production
if [ "$APP_ENV" = "production" ]; then
    echo "⚡ Optimisations Laravel (production)..."
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
fi

# Lancement du serveur Laravel (local uniquement)
if [ "$CI" != "true" ] && [ "$NO_SERVE" != "true" ]; then
    echo "🚀 Lancement du serveur Laravel..."
    php artisan serve --host=0.0.0.0 --port=8000
fi

# Tests
echo "✅ Lancement des tests..."
php artisan test
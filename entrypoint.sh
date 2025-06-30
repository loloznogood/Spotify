#!/bin/bash

cd /var/www

echo "📁 Répertoire courant : $(pwd)"
ls -la

# Installer les dépendances
if [ ! -f vendor/autoload.php ]; then
    echo "🔧 Installation des dépendances..."
    composer install
fi

# Copier .env s'il n'existe pas
if [ ! -f .env ]; then
    echo "📋 Copie de .env.example..."
    cp .env.example .env
fi

# Attendre la BDD
echo "⏳ Attente de MySQL..."
until mysqladmin ping -h"$DB_HOST" --silent; do
  sleep 2
done

# Générer la clé de l'application
echo "🔑 Génération de la clé..."
php artisan key:generate

# Migrer la base (optionnel)
php artisan migrate --force

# Lancer le serveur Laravel
echo "CI=$CI"
if [ "$CI" != "true" ]; then
  echo "🚀 Lancement du serveur Laravel..."
  php artisan serve --host=0.0.0.0 --port=8000
fi

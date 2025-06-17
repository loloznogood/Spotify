FROM php:8.3-cli

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    git curl zip unzip libzip-dev libonig-dev libxml2-dev \
    default-mysql-client \
    && docker-php-ext-install pdo_mysql mbstring zip

# 👉 Installer Node.js 18 (recommandé pour Vite/Laravel)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Vérifier les versions
RUN node -v && npm -v

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier le script d'entrée
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /var/www

ENTRYPOINT ["/entrypoint.sh"]
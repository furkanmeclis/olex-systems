#!/bin/sh

echo "🎬 entrypoint.sh: [$(whoami)] [PHP $(php -r 'echo phpversion();')]"

# Composer autoload dosyasını optimize et
composer dump-autoload --no-interaction --no-dev --optimize

echo "🎬 artisan commands"

# Veritabanı migrasyonu
php artisan migrate --no-interaction --force

# Eğer seed işlemi yapılmamışsa (örnek kontrol)
if [ ! -f /seeded.flag ]; then
  echo "🎬 Seeding database..."
  php artisan db:seed --no-interaction --force
  touch /seeded.flag # Seed işlemi yapıldığını işaretle
else
  echo "✅ Database seeding already completed. Skipping."
fi

echo "🎬 start supervisord"

# Supervisord başlatma
supervisord -c $LARAVEL_PATH/.deploy/config/supervisor.conf

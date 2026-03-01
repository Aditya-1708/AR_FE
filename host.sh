#!/bin/bash

set -e  # Exit immediately if any command fails

echo "🚀 Starting deployment..."

# Step 1: Build project
echo "📦 Running build..."
npm run build

# Step 2: Ensure target directory exists
echo "📁 Ensuring target directory exists..."
sudo mkdir -p /var/www/arindustries

# Step 3: Remove old files
echo "🧹 Cleaning old files..."
sudo rm -rf /var/www/arindustries/*

# Step 4: Copy new build files
echo "📂 Copying new build..."
sudo cp -r ./dist/* /var/www/arindustries/

# Step 5: Set proper permissions (important for nginx)
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data /var/www/arindustries
sudo chmod -R 755 /var/www/arindustries

# Step 6: Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"

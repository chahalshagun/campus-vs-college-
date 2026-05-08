#!/bin/bash

# Build the project
npm run build

# Initialize gh-pages branch
git checkout --orphan gh-pages

# Copy build files to root
cp -r dist/* .

# Remove build folder
rm -rf dist

# Add CNAME file for custom domain (optional)
# echo "your-domain.com" > CNAME

# Add all files
git add .
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin gh-pages

# Switch back to main branch
git checkout main

#!/bin/bash

# Root project folder
PROJECT_NAME="agadir-activities-ui"

# Create root folder
mkdir -p $PROJECT_NAME
cd $PROJECT_NAME || exit

# Public
mkdir -p public
touch public/index.html public/favicon.ico

# Assets
mkdir -p src/assets/images/{hero,trips,icons}
mkdir -p src/assets/styles
touch src/assets/styles/variables.css
touch src/assets/styles/global.css

# Dummy images
touch src/assets/images/hero/agadir-hero.jpg
touch src/assets/images/trips/{desert.jpg,quad.jpg,boat.jpg}

# Components
mkdir -p src/components/{layout,ui,trips}

touch src/components/layout/{Header.jsx,Footer.jsx,Navbar.jsx}
touch src/components/ui/{Button.jsx,Badge.jsx,Rating.jsx}
touch src/components/trips/{TripCard.jsx,TripList.jsx,TripDetails.jsx}

# Pages
mkdir -p src/pages
touch src/pages/{Home.jsx,Trips.jsx,TripSingle.jsx,About.jsx,Contact.jsx}

# Data
mkdir -p src/data
touch src/data/tripsData.js

# Routes
mkdir -p src/routes
touch src/routes/AppRoutes.jsx

# Core files
touch src/{App.jsx,main.jsx,index.css}

# Config & root files
touch .gitignore package.json vite.config.js README.md

echo "✅ React UI folder structure created successfully!"


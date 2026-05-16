// sitemap-generator.js
// This script connects to your MongoDB and generates a complete sitemap with all products

import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config(); 
// REPLACE THIS with your actual MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

// REPLACE THIS with your actual domain
const DOMAIN = process.env.FRONTEND_URL;

// Product Schema (matching your model)
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
});

const Product = mongoose.models.product || mongoose.model("product", productSchema);

async function generateSitemap() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Fetch all products
        const products = await Product.find({});
        console.log(`Found ${products.length} products`);

        // Get current date in ISO format
        const today = new Date().toISOString().split('T')[0];

        // Start building the sitemap XML
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage - Highest Priority -->
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Collection Page -->
  <url>
    <loc>${DOMAIN}/collection</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- About Page -->
  <url>
    <loc>${DOMAIN}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Contact Page -->
  <url>
    <loc>${DOMAIN}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Individual Product Pages -->
`;

        // Add each product to the sitemap
        products.forEach(product => {
            sitemap += `  <url>
    <loc>${DOMAIN}/product/${product._id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
        });

        // Close the sitemap
        sitemap += `</urlset>`;

        // Write to file
        fs.writeFileSync('sitemap.xml', sitemap);
        console.log('✅ Sitemap generated successfully: sitemap.xml');
        console.log(`Total URLs: ${products.length + 4}`);

        // Close MongoDB connection
        await mongoose.connection.close();
        
    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();

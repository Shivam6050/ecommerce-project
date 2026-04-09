# Forever - Modern Full-Stack E-commerce Platform

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://ecommerce-project-frontend-two.vercel.app)

A high-performance, fully responsive e-commerce application built with the MERN stack. This project features a customer-facing store, a dedicated admin panel for inventory management, and secure payment integrations.

## 🚀 [Live Demo](https://ecommerce-project-frontend-two.vercel.app)

---

## ✨ Features

### 🛒 Customer Frontend

- **Product Discovery**: Browse collections with advanced filtering by category and sub-category.
- **Search**: Real-time product search functionality.
- **Shopping Cart**: Fully functional cart with persistent state and local storage backup.
- **Authentication**: Secure Login/Register system and **Google OAuth** integration.
- **Checkout**: Support for multiple payment methods including **Stripe**, **Razorpay**, and Cash on Delivery (COD).
- **Order Tracking**: Detailed order history and status tracking for users.

### 🛠️ Admin Panel

- **Product Management**: Add, update, and remove products with multi-image support (Cloudinary).
- **Order Overviews**: View and manage all customer orders and shipment statuses.
- **Secure Access**: Dedicated admin authentication system.

### 🔍 SEO & Performance

- Optimized meta tags and Open Graph data for social sharing.
- Auto-generated `sitemap.xml` and `robots.txt`.
- High Lighthouse scores thanks to Vite's optimized build process.

---

## 💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Storage**: Cloudinary (Cloud-based Image Management)
- **Payment**: Stripe API, Razorpay API
- **Auth**: JWT (JSON Web Tokens), Google OAuth

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project
```

### 2. Configure Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGODB_URI = your_mongodb_uri
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_SECRET_KEY = your_secret_key
CLOUDINARY_NAME = your_cloudinary_name
JWT_SECRET = your_secret_string
ADMIN_EMAIL = admin@example.com
ADMIN_PASSWORD = your_password
STRIPE_SECRET_KEY = your_stripe_key
RAZORPAY_KEY_ID = your_razorpay_id
RAZORPAY_KEY_SECRET = your_razorpay_secret
GOOGLE_CLIENT_ID = your_google_id
```

### 3. Configure Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_BACKEND_URL = http://localhost:4000
VITE_RAZORPAY_KEY_ID = your_razorpay_id
VITE_GOOGLE_CLIENT_ID = your_google_id
```

### 4. Configure Admin

```bash
cd ../admin
npm install
```

### 5. Run the Project

- **Backend**: `npm start` (Runs on port 4000)
- **Frontend**: `npm run dev`
- **Admin**: `npm run dev`

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Shivam** - [GitHub Profile](https://github.com/Shivam6050)

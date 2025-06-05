# Food Delivery App

## Overview
A full-featured food delivery application with a Node.js/Express backend that connects customers with restaurants. The platform enables restaurant browsing, food ordering, and delivery tracking with role-based access control.

## Features

### User Management
- **Authentication**: Secure login/registration with JWT
- **Role-based Access**: Admin, restaurant owner, and customer roles
- **Profile Management**: View and update user information

### Restaurant Management
- **Restaurant Registration**: Admin-controlled restaurant onboarding
- **Restaurant Discovery**: Browse and search restaurants
- **Restaurant Administration**: Owners can update restaurant details

### Menu Management
- **Food Item Creation**: Add/edit menu items with categories
- **Dietary Options**: Vegetarian/non-vegetarian classification
- **Menu Customization**: Pricing, availability, and descriptions

### Order System
- **Cart & Checkout**: Add items and place orders
- **Order Tracking**: Real-time status updates
- **Order History**: View past orders and details

## Technical Architecture

### Backend (Node.js/Express)
- **RESTful API**: Structured endpoints for all operations
- **MongoDB Database**: Mongoose schemas for data modeling
- **Authentication**: JWT-based auth with middleware protection
- **Error Handling**: Comprehensive validation and error responses

### Security Features
- **Password Encryption**: bcrypt hashing
- **Token-based Authentication**: Secure JWT implementation
- **Role Verification**: Middleware for access control
- **Input Validation**: Request validation and sanitization

## API Endpoints

### User Endpoints
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Restaurant Endpoints
- `POST /api/restaurant/register` - Register restaurant (admin only)
- `GET /api/restaurant/get-restaurants` - List all restaurants
- `GET /api/restaurant/get-restaurant/:id` - Get restaurant details
- `PUT /api/restaurant/update-restaurant/:id` - Update restaurant (owner only)
- `DELETE /api/restaurant/delete-restaurant/:id` - Delete restaurant (admin only)

### Food Item Endpoints
- `POST /api/food-items/add` - Add food item (owner only)
- `GET /api/food-items/restaurant/:id` - Get restaurant menu
- `PUT /api/food-items/update/:id` - Update food item (owner only)
- `DELETE /api/food-items/delete/:id` - Delete food item (owner only)

### Order Endpoints
- `POST /api/orders/create` - Place new order
- `GET /api/orders/user` - Get user orders
- `GET /api/orders/restaurant/:id` - Get restaurant orders (owner only)
- `PUT /api/orders/status/:id` - Update order status (owner only)

## Data Models

### User Model
- Email (unique, validated)
- Name
- Password (hashed)
- Role (admin, customer, restaurant_owner)
- Phone number (validated)

### Restaurant Model
- Name and address
- Contact information
- Cuisine type (from predefined list)
- Owner reference (User model)
- Active status

### Food Item Model
- Name and description
- Price
- Category (Starter, Main Course, etc.)
- Vegetarian status
- Restaurant reference
- Availability status
- Image URL

### Order Model
- Customer reference
- Restaurant reference
- Order items (food items with quantities)
- Total amount
- Delivery address
- Order status (Pending, Confirmed, etc.)
- Timestamps

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Setup Steps
1. Clone the repository


Copy

Insert at cursor
markdown
git clone
cd food-delivery-app/server


2. Install dependencies

Copy

Insert at cursor
npm install


3. Environment Configuration
Create a `.env` file with:

Copy

Insert at cursor
PORT=5000
MONGO_URI=mongodb://localhost:27017/food-delivery
SECRET_KEY=your_jwt_secret_key


4. Start the server

Copy

Insert at cursor
Development mode
npm run dev

Production mode
npm start


## Future Enhancements
- Payment gateway integration
- Real-time order tracking
- Restaurant ratings and reviews
- Delivery personnel management
- Promotional offers and discounts

## Contributors
[Prem]

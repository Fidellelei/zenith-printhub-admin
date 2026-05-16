# PrintHub Studio

Zenith PrintHub is a modern React-based administrator portal developed for managing products and services for a printing and branding business. The application allows administrators to create, read, update, delete, and search products while maintaining a professional and responsive user interface.

This project was developed as part of a React summative lab focused on advanced frontend development concepts such as:
- React Hooks
- Context API
- Custom Hooks
- CRUD operations
- React Router
- State management
- Responsive design
- Testing setup
- Simulated backend APIs

# Features
## Core Features
- Single Page Application (SPA)
- Client-side routing using React Router DOM
- Dynamic product dashboard
- Add new printing products
- Edit existing product prices
- Delete products
- Search products dynamically
- Responsive UI for mobile and desktop
- Dashboard statistics
- Product image support
- Global state management using Context API
- Custom React hook implementation
- Toast notifications
- Simulated backend using JSON Server

# Technologies Used
## Frontend
- React
- Vite
- React Router DOM
- CSS3
- Context API
- Custom Hooks

## Backend Simulation
- JSON Server

## Testing
- Vitest
- React Testing Library
- Jest DOM


# Complete Project Structure

```bash
printing-shop-admin/
│
├── node_modules/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── ProductContext.jsx
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── AddProduct.jsx
│   │   ├── Home.jsx
│   │   └── Products.jsx
│   │
│   ├── tests/
│   │   └── App.test.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .gitignore
```

# Folder and File Explanation
## public/
Stores static public assets.

## src/
Contains all frontend React application code.

## src/components/
Reusable UI components.
### Navbar.jsx
Handles application navigation links.

### Footer.jsx
Displays footer content for the application.

## src/context/
Contains React Context API logic.
### ProductContext.jsx
Stores global product state and loading state.

## src/hooks/
Contains reusable custom hooks.
### useProducts.js
Custom hook used to access product context.

## src/pages/
Contains main application pages.
### Home.jsx
Landing page with hero section and introduction.

### Products.jsx
Displays products dashboard with CRUD operations.

### AddProduct.jsx
Contains form for adding new products.

## src/tests/
Contains testing files.
### App.test.jsx
Testing setup for React components and interactions.

## src/App.jsx
Main application component containing routes and layout.

## src/main.jsx
Application entry point responsible for rendering React.

## src/index.css
Global styling for the application.

Includes:
- Responsive design
- Dashboard styling
- Cards
- Forms
- Hero section
- Toast notifications

## db.json
Simulated backend database used with JSON Server.

Stores all product information.

Example:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Business Cards",
      "description": "Premium matte finish cards",
      "price": 15,
      "image": "https://example.com/image.jpg"
    }
  ]
}
```

## package.json
Contains:
- dependencies
- scripts
- project metadata

## vite.config.js
Configuration file for Vite development server.

## README.md
Project documentation and setup guide.

# Available Routes
| Route | Description |
|-------|-------------|
| / | Home page |
| /products | Product dashboard |
| /add-product | Add new product page |


# API Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /products | Fetch products |
| POST | /products | Create product |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

# React Concepts Implemented
## React Hooks
### Standard Hooks
- useState
- useEffect
- useContext

### Custom Hooks
- useProducts()
# State Management
Global state management is implemented using:

- React Context API
- ProductProvider component

This prevents prop drilling and centralizes application state.


# CRUD Operations
## Create
Add products through a controlled form.

## Read
Fetch products dynamically from JSON Server.

## Update
Update product pricing directly from dashboard cards.

## Delete
Remove products instantly from dashboard.

# Search Functionality
Dynamic product search filters products in real time using React state.

# Responsive Design
Responsive layouts implemented using:
- CSS Grid
- Flexbox
- Media queries

The application adapts to:
- Desktop
- Tablet
- Mobile devices


# Dashboard Features
- Product inventory statistics
- Inventory value tracking
- Responsive product cards
- Dynamic image rendering
- Toast notifications
- Modern admin layout

# Testing Setup
Testing tools installed:

- Vitest
- React Testing Library
- Jest DOM

Example test coverage:
- Component rendering
- Form interaction
- Route navigation
- CRUD behavior

# Known Limitations

- JSON Server is a mock backend.
- Data persistence is local only.
- Authentication is not implemented.
- Image uploads use URLs only.

# Future Improvements
Potential future upgrades:
- Authentication system
- Cloud database integration
- Analytics dashboard
- Product categories
- Dark mode
- Backend deployment
- Real API integration
- File upload support

# Git Workflow
Recommended Git workflow:

```bash
git checkout -b feature-name
git add .
git commit -m "Added feature"
git push origin feature-name
```

# Deployment
Recommended frontend deployment platform:
- Vercel

# Author
## Fidel Lelei
Zenith PrintHub — React Admin Portal Project

---

# License
This project was created for educational purposes.
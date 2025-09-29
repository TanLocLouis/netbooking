# NetBooking

NetBooking is a full-stack web application for product browsing and user management, featuring a React + TypeScript frontend and a Java Spring Boot backend. The project demonstrates a typical e-commerce or booking platform structure, including authentication and product display.

---

## Features

### Frontend (React + TypeScript + Vite)
- **Product Browsing:** Fetches and displays a list of products from the backend API.
- **User Authentication:** Supports user login (see `Login.tsx`).
- **Componentized UI:** Includes reusable components such as Navbar, Footer, and MainContainer.
- **Routing:** Uses React Router for navigation.
- **Styling:** CSS modules for clean component styling.

### Backend (Java Spring Boot)
- **User Management:** Handles user registration and authentication (with password verification).
- **Product Management:** Exposes REST API endpoints to retrieve product information.
- **Persistence:** Uses JPA for database interaction (e.g., `User`, `Product` entities).
- **CORS Enabled:** Allows frontend-backend communication during development.

---

## Project Structure

```
netbooking/
├── backend/
│   └── src/main/java/com/example/demo/
│       ├── api/             # REST controllers (e.g., UserController)
│       ├── dao/             # JPA repositories (UserDao, ProductDao, etc.)
│       ├── model/           # Data models (User, Product, UserResponse)
│       └── service/         # Business logic (UserService)
├── src/
│   ├── src/                 # React app source (components, css)
│   ├── index.html           # Frontend entrypoint
│   └── vite.config.ts       # Vite config for React + TS
├── docs/
│   └── setup_env/README.md  # Environment setup instructions
```

---

## Getting Started

### Prerequisites

- **Backend:** Java 17+, Maven, IntelliJ IDEA
- **Frontend:** Node.js, npm

### Backend Setup

1. Navigate to `/backend`.
2. Import as a Maven project in IntelliJ IDEA or your preferred IDE.
3. Run the Spring Boot application (`DemoApplication.java`).

### Frontend Setup

1. Navigate to `/src`.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Access the app at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## API Overview

### User

- `GET /api/v1/user` — Get all users
- `POST /api/v1/user/auth` — Authenticate a user (email, password)

### Product

- `GET /api/v1/product` — Get all products

---

## Example Code Snippets

### Fetch and Display Products (Frontend)
```tsx
useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch("http://localhost:8080/api/v1/product");
        const data = await response.json();
        SetProduct(data);
    }
    fetchProduct();
}, []);
```

### Authenticate User (Backend)
```java
@PostMapping(path = "/auth")
public UserResponse loginUser(@RequestBody UserLogin loginInfo) {
    return userService.authUserByEmail(loginInfo);
}
```

---

## Environment Setup

See [`docs/setup_env/README.md`](docs/setup_env/README.md) for detailed environment setup instructions.

---

## License

This project is for educational/demo use. See LICENSE for details if present.

---

## Author

- [TanLocLouis](https://github.com/TanLocLouis)

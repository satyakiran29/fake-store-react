# 🛒 Fake Store React

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-%5E19.2.0-61dafb.svg?logo=react)
![Vite](https://img.shields.io/badge/vite-%5E7.2.4-646CFF.svg?logo=vite)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**Fake Store React** is a modern, responsive e-commerce product listing application built with React and Vite. It consumes the [FakeStore API](https://fakestoreapi.com/) to render a dynamic storefront, complete with product categories, pricing, and pagination features.

🔗 **[Live Demo](https://fake-store-react.skdev1.workers.dev/)**

---

## 🎯 Why this project is useful

This project serves as an excellent foundation and reference implementation for:
- **React Hooks Integration**: Demonstrates practical usage of `useState` and `useEffect` for data fetching and state management.
- **API Consumption**: Shows how to cleanly integrate and handle asynchronous requests using `axios`.
- **Component Architecture**: Features a modular folder structure with reusable components (Navbar, Footer, Product Cards).
- **Pagination & UI/UX**: Implements a "Load More" pagination pattern with loading and error states for a smooth user experience.

---

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyakiran29/fake-store-react.git
   cd fake-store-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at your local development URL, typically `http://localhost:5173`.

### Usage Example

The core data fetching logic is located in `src/App.jsx`. Here is a brief snippet showing how the app consumes the FakeStore API:

```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("Products loaded:", response.data);
  } catch (error) {
    console.error("Failed to load data", error);
  }
};
```

To build for production, run:
```bash
npm run build
```

---

## 🆘 Support and Help

If you encounter any issues or have questions about the codebase:

- **Issues**: Check our [Issue Tracker](https://github.com/satyakiran29/fake-store-react/issues) on GitHub.
- **Discussions**: Feel free to start a thread in the GitHub Discussions or open a Q&A issue.
- **API Documentation**: Refer to the [FakeStore API Docs](https://fakestoreapi.com/docs) for information about the underlying data source.

---

## 🤝 Maintainers and Contributing

**Maintainer / Author:** Satyakiran
- [GitHub: @satyakiran29](https://github.com/satyakiran29)
- [LinkedIn: satyakiran29](https://linkedin.com/in/satyakiran29)
- [Portfolio](https://satyakiran.vercel.app)

### Contributing

We welcome contributions from the community! Whether it's adding a new feature, fixing a bug, or improving documentation, your help is appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For more detailed instructions, please refer to the [Contributing Guidelines](CONTRIBUTING.md) (if available).

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

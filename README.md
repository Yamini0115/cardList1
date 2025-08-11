SETUP INSTRUCTIONS:

Clone the Repository:
git clone https://github.com/Yamini0115/cardList1

2.Run the App: npm run dev

3.Run Unit Tests: npm test

SUMMARY: Dynamically generated 1000 product cards with images from picsum.photos and rotating text descriptions. Implemented a responsive grid layout using react-window's FixedSizeGrid, rendering only visible items to optimize performance. Added a "Scroll to Top" button that appears after scrolling 300px. Used useRef and addEventListener to track scrolling and trigger button visibility. Designed the UI with CSS hover effects and made it mobile-responsive using media queries.

VIRTUAL SCROLLING & TESTING IMPLEMENTATION: 1.Virtual Scolling: Used FixedSizeGrid from react-window with: columnCount: 4, columnWidth: 340, rowHeight: 250, height: 600. Dynamically calculated rowCount and used cell indexing to render card data efficiently. Only cards within the current scroll viewport are rendered, reducing memory and DOM load.

2.Unit Testing (React Testing Library): Tests included: Heading and grid render check. Scroll-to-top button visibility and behavior. Virtualization test: ensuring non-visible cards (like Product 999) are not in DOM. Image rendering test: checks for image src and alt attributes.

STYLINGS AND RESPONSIVESS: Custom CSS styles used for layout, hover animations, and card formatting. Responsive design using media queries for screen widths below 992px and 576px. Smooth hover zoom effects and fixed position scroll button enhance UX.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

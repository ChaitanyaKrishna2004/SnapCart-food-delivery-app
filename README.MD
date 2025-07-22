🧠 DAY 1
📦 CDN (Content Delivery Network)
CDNs like unpkg or jsDelivr let you include React in your project without installing it locally.
You just add script tags in your HTML to load React and ReactDOM.

🌐 Cross-Origin
Cross-origin refers to making requests across different domains, ports, or protocols.
Browsers block these by default for security. To allow it, servers use CORS headers.

⚛️ React Element & JSX
React.createElement() returns a JavaScript object, not an HTML element.

When this object is rendered to the DOM using ReactDOM, it becomes an actual HTML element.

JSX (JavaScript XML) is syntactic sugar for React.createElement() – it’s converted to JS code by Babel.

Example:

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello, React! 😁"
);

React.createElement → ReactElement (JS object) → DOM (HTML element)

🧠 DAY 2
🧱 React Components
React components are building blocks of UI. There are two types:

1. Class-based Components (Old way)
   Uses ES6 class syntax

Has lifecycle methods (like componentDidMount)

2. Functional Components (Modern way)
   A JavaScript function that returns JSX

Simpler and more popular with Hooks support

✅ Example of a Functional Component:
jsx
Copy
Edit
const HeadingComponent = () => (

  <div id="container">
    <Title />
    <h1>This is a React Functional Component</h1>
  </div>
);

#Parcel

🚀 Parcel Overview (for React Development)
Parcel is a zero-config bundler used for modern web apps like React.

🔧 Development build is automatically optimized and fast.

🌐 Local server starts with live reload for development.

🧠 Hot Module Replacement (HMR) updates HTML/CSS/JS without full reload.

⚙️ File watching algorithm is written in C++ for performance.

⚡ Caching ensures super fast rebuilds.

🖼️ Image optimization is built-in during production.

🧹 Minification reduces file sizes by removing extra spaces and comments.

📦 Bundling combines all your files into optimized output.

🗜️ Compression helps reduce bandwidth and improves load speed.

🔑 Consistent hashing supports long-term caching in browsers.

✂️ Code splitting loads only what’s needed per route or module.

📤 Differential bundling creates separate bundles for modern and older browsers.

🌍 Browser list support allows targeting specific browser versions.

🛠️ Diagnostics give detailed error messages and hints.

🧯 Error handling is built-in for smooth dev experience.

🔐 HTTPS support for secure local development.

🌲 Tree shaking removes unused code automatically.

🧱 Different dev and production bundles with automatic switching.

📜 Transitive dependencies are handled automatically (no need to track them manually).

📦 Prod build: Use npx parcel build index.html (removes .parcel-cache, optimized for deployment).

DAY-3
#Babel

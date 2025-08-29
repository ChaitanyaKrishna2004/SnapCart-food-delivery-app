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

DAY - 3
#Babel

DAY - 4
Config driven Ui
Project online delivary app
Join function in javasecript.
Map filter and reduce
In react Index using as key bad practice

// if no dependency array => useeffect is called on ever render.
// if dependency array is empty = [] => useEffect is called on onlyinitial render(just once).
// if dependency array is empty [btnNameReact] => called evrytime btnNameReact is updated.
useEffect(() => {
// fetchData();
}, [btnNameReact]);
DAY - 5 Let's get Hooked
Why do we use react ? -> it make u write less code and build the large scarle production.
Never ever keep the hard corded at in our app.

Expor are two types

---> Export Default export/import
export default Component;
import Component from "path";

---> Named Export/Import
export const Component;
import {Component} from "path";
Can we do both at a time???

react can do the fast dom maculation.

React hooks ->utilti function
It is normal js function had supeer power.
State Variable - Super powerful variable.
--->Use State ->Superpowerfull state variable in react.
const [ListofRestaurants] = useState([]);
Whene ever the state variable update the react will rerender compontenet
--->Use Effect ->

Reconciliation Algorithm(React Fiber)

why we need to use the superprops?
In React class components, super(props) is used to call the constructor of the parent class (React.Component) and to pass the props object to it. This is necessary for proper initialization of the component and for accessing this.props within the constructor.

Redux Toolkit
-- Install @reduxjs/toolkit and react-redux
-- Build Our Store
-- Connect out store to our app
-- create slices(cart slice)
-- dispatch(action)
-- Read the data using selector

# Types of testing that developer can do

-- Unit Testing
-- Integration Testing
-- End to End Testing(E2E)

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies - on the jest website
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration npx create-jest
- Install jsdom libarary separately
- Install @babel/preset-react - to jsx work in test cases
- Include @babel/preset-react inside my bable config
- Install @testing-library/jest-dom

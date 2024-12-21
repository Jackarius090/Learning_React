import { createRoot } from "react-dom/client";
import "./index.css";

// const MyComponent = () => {
//   return <div>Hello</div>;
// };




const MyComponent = (
  <main>
    <img style={{ width: "40px" }} src="src/assets/react.svg" alt="" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
);

createRoot(document.getElementById("root")).render(MyComponent);

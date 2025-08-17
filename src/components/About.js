import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Component</h1> npx tailwindcss init
        <h2>This is learning react</h2>
        <UserClass name={"Chaitanya (Class)"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is learning react</h2>
//       {/* <User name={"Chaitanya (function)"} /> */}
//       <UserClass name={"Chaitanya (Class)"} />
//     </div>
//   );
// };

export default About;

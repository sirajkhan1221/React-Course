import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import userIcon from "./user.png";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement(
//   "div",
//   {
//     className: "Title",
//     key: "title",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "This is h1 Tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2",
//       },
//       "This is h2 Tag"
//     ),
//     React.createElement(
//       "h3",
//       {
//         key: "h3",
//       },
//       "This is h3 Tag"
//     ),
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);

// using Jsx

// const Header = (
//   <div className="title">
//     <h1>this is h1 tag</h1>
//     <h2>this is h2 tag</h2>
//     <h3>this is h3 tag</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Header);

// using functional component

// const Header = () => (
//   <div className="title">
//     <h1>this is h1 tag</h1>
//     <h2>this is h2 tag</h2>
//     <h3>this is h3 tag</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);

// using functional component pass attribute

// const Header = () => (
//   <div className="title">
//     <h1 style={{ color: "blue" }}>this is h1 tag</h1>
//     <h2 style={{ color: "red" }}>this is h2 tag</h2>
//     <h3 style={{ color: "green" }}>this is h3 tag</h3>
//   </div>
// );

// Composition of Component (Add a component inside another)
// const AnotherComponent = function(){
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <AnotherComponent/>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// Q: Create a Header Component from scratch using Functional Component with JSX
// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice
// */

const Header = () => (
  <div className="container">
    <span className="logo">
      <img className="logo" src={logo} alt="logo" />
    </span>
    <div>
      <input type="search"></input>
      <button type="submit">Search</button>
    </div>
    <img className="userIcon" src={userIcon} alt="user Icon" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);

// const Title = () => (
//   <h1 className="title" tabIndex="5">
//     React
//   </h1>
// );

// <h1 className="title">this is a Heading</h1>;

// functional component

// const HeadingComponent = () => (
//   <React.Fragment>
//     <div id="container1">
//       <Title></Title>
//       <p className="text">text</p>
//     </div>
//     <div id="container2">
//       <Title></Title>
//       <p className="text1">text1</p>
//     </div>
//   </React.Fragment>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);

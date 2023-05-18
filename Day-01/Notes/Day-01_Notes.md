Creating a basic html file using emmet which is an extension in vs code that generates html content with certain commands

Using javascript to create a heading element.
Inside the script tag using the document API and calling method
Document.createElement(“h1) and storing it in constant
Const heading = Document.createElement(“h1”);
Heading.innerHTML = “React”
Adding the content in the h1 tag using the reference of the h1 tag and assigning .innerText a value
Adding heading in the html by finding the root element with document.getelmentByid(“root”);

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>
  <body>
    <div id="root">
      <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "React";
        const root = document.getElementById("root");
        root.appendChild(heading);
      </script>
    </div>
  </body>
</html>

This is how we use javascript to create an element

Adding react to our Project using CDN

CDN – content delivery network these are website, where libraries like react are hosted and we simple use the link to download the library and include it in our project
Typically we use package managers like npm or yarn to directly install react library locally in our system.

React, does not only work in browser it also have react native which works on mobile.

Cross origin – browsers follows a security mechanism called same origin-policy, which restricts these cross origin requests to, protects user security and prevent them from malicious attack
When we include cross origin in the script tag the browser will be known that it is going to make a cross origin request and the browser sets headers accordingly.

For creating an element with react we have a method called React.createElement(“h1”,{},”React”), which takes 3 arguments first is the tag name , second is an object which contains element attributes and third is the content.

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./index.css" />
    <title>React</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- core React libray -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!-- React-Dom library need to modify DOM -->
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="./app.js"></script>

  </body>
</html>

A root element is needed for react to render its elements

Const root = React.Dom.createRoot(document.getElementById(“Root”);
Root.render(heading)

With JavaScript we would have to the same in multiple steps
First we would have to create the element using document.createElement(“h1”)
Second is to get the reference of the element by storing it in a variable const heading = document.createElement(“h1”)
Lastly we will have to set the innertext heading.textContent = “React”

With react we will have to use only one single line of command

As react is declarative we will just have to tell react what to do it will do it for us like for example creating and html element.

Creating nested elements with react

<div id="parent">
  <div id="child"></div>
</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement(
"div",
{ id: "child" },
React.createElement("h1", {}, "H1 Tag")
)
);

console.log(parent, "parent");
root.render(parent);

to create a nested element we set that element in the third parameter of the react.createElement().

React.createElement will not create an html element it creates object and
Render () converts that object to html in the browser

Creating a sibiling :

Converting the third parameter to array and include the sibiling element

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", {}, "H1 Tag"),
React.createElement("h2", {}, "H2 Tag"),
])
);

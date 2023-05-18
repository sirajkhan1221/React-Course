## Namaste React Course by Akshay Saini

# _Chapter 01 - Inception_

## Theory -

- What is `Emmet`?
  emmet is an extension in vs code that generates html content with some shortcut keys like ! will generate an enitre hmtl boiler plate code

- Difference between a `Library and Framework`?
  a library is like a collection of pre written code written by developer which then can be used by other developers it consists of a set of functions, classes or modules on the other hand, a framework is a structured tool which comes with predefined architecure for developing applications such as angular which has everthing buit up inside it for example - routing , http modules for making http request etc.

- What is `CDN`? Why do we `use` it?
  content delivery network which hosts websites or apps that can then be downloaded from for eg bootstrap, react etc
- Why is `React known as React`?
  the name react is given to the react libray of its behaviour of reactiveness or reacting to data changes

- What is `crossorigin in script tag`?
  browsers follow a security mechansims called same origin-policy, which restricts apps from making request to other apis hosted on a different server in order to provide user's security and prvent them from malcious attacks. when 'crossorigin' is included in the script tag, the browsers adds specific headers that allows it access resoursces from other domains.

- What is difference between `React and ReactDOM`?
  react is the core library which provides the functionality for building components , managing state, handling events whereas reactDom is a package specifically designed for working with DOM. such as rendering components in the dom.

- What is difference between `react.development.js` and `react.production.js` files via CDN?
  react.development.js is used for devlopment purposes it gives some additional debugging information, warnings and other helpful methods.

  react.production.js is used to build production ready apps it does not inlcude any additional information with debugging.

- What is `async and defer`?
  async and defer attributes of script tag async allws browsers to fetch the javascript file asynchronously without blocking the HTML parsing. while 'defer' allows the browser to fetch the script asynchronouslybut defers its execution untill the html parsing is complete.

## Coding -

- Set up all the `tools in your laptop`
  - `VS Code`
  - `Chrome`
  - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`
- `Push code to Github` (Theory as well as code)
- Learn about `Arrow Functions` before the next class

## References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

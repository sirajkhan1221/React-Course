Is JSX mandatory for React?
No, Jsx is not mandatory for react, but it is commonly used and highly recommended. jsx allows us to write html like code inside javascript files when working with react. it provides more expressive and conscise way to define the structure of react components.

while we can write react components without using JSX by using react.createElement function directly which then becomes difficult to maintan and readable

Is ES6 mandatory for React?
ES6 is not mandotory to use with react. but it is highly recommended to use es6 features make the development easier . it enhances the readability, maintainability and productivity of code.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {< />} expression.

<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

How can I write comments in JSX?
in jsx comments are placed in curly braces {}, and start with /_ and end with _/

<div>
  {/* This is a comment in JSX */}
  <h1>Hello, React!</h1>
  {/* 
    This is a multi-line comment
    in JSX. It can span multiple lines.
  */}
  <p>Welcome to my React application.</p>
</div>

What is <React.Fragment></React.Fragment> and <></>?
<React.Fragment> or <> (short syntax) used to group multiple elements together . typically we return a single parent element when rendering JSX, there are some cases where you want to render multiple elements without adding the additional wrapping element. that's where react.fragment comes in handy
import React from 'react';

const MyComponent = () => {
return (
<React.Fragment>

<h1>Title</h1>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</React.Fragment>
);
};

// Or using the short syntax

const MyComponent = () => {
return (
<>

<h1>Title</h1>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</>
);
};

What is Reconciliation in React?

What is React Fiber?

Why do we need keys in React?
keys are unique identifiers which react need in order to enhance performance of the application. if there are multiple compoents or list that are at the same level react would need a unique key to identify each list item during the reconcilation process where it compares the elements with old element and if any of the element was modified and it only updated that element with the help of the key and rest of the elements are not updated.

Can we use index as keys in React?

it is not recommended to use index as keys as if an elements gets modifies the index of the element would change and react would treat the elements as the old element and will not rerender resulting to perfomance issues.

What is props in React? Ways to.

props in react component are like arguments that are passed into the function. the properties are passed from the component. props allows us to render dynamically

passing Props : props are passed from parent component to child components as attributes , for example, `<childComponent propName/>`

accessing props : inside the child component, props can be accessed as a javascript object .`props.propName`.

immutable : props are read-only and cannot be modifiedby the child component . they are meant to be used for one-way communication, where data flows from parent to child.

What is Config Driven UI?

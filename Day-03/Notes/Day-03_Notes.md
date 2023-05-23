What is JSX?
jsx stands for javascript xml. Jsx is html like syntax which allows us to write html code in javascript.
Jsx element are transpiled to react element by transpiler babel.
Jsx is not html element It is an javascript object which then transpiles to html element by babel.

Superpowers of JSX.
jsx allows you to write javascript expressions
function greeting(user) {
//JSX
return <h1>{user}, How are you!!!</h1>;
}

Role of type attribute in script tag? What options can I use there?
The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {< />} expression.

<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

code :

Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

Create the same element using JSX
Create a functional component of the same with JSX
Pass attribute into the tag in JSX
Composition of Component (Add a component inside another)
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
Create a Header Component from scratch using Functional Component with JSX

Add a Logo on Left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice

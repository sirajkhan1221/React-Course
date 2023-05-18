const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ])
);

console.log(parent, "parent");
root.render(parent);

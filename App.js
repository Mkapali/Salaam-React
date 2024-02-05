const heading = React.createElement(
    "h1", 
    {id: "heading", className: "header"},
    "Hello World From React");

/** Creating Nested Elements
    const heading = React.createElement(
        "h1", 
        {id: "heading", className: "header"},
        React.createElement("p", {id: "para", className: "paragraph"},"Hello World From para React"));

        ## For Multiple Nested Elements we need to pass them as a Array
        const heading = React.createElement(
        "h1", 
        {id: "heading", className: "header"},[
        React.createElement("p", {id: "para", className: "paragraph"},"Hello World From para React"),
        React.createElement("p", {id: "para", className: "paragraph"},"Hello World From para React")
    ]);
 */    
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
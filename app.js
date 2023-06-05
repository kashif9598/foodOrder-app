const heading = React.createElement('h1', {id: "heading"}, 
React.createElement('div', {id: 'child'}, 
React.createElement('h1', {}, 'I am an H1 Tag')
)
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
        const parent = React.createElement("div", {id:"h1", className:"parent"}, 
           [
            React.createElement("div", {id:"h1", className:"child"},
            [React.createElement("h1", {},"i m h1 tag"), 
            React.createElement("h2", {},"i m h2 tag")
            ]
            ),
            [ React.createElement("div", {id:"h1", className:"child2"},
            [React.createElement("h1", {},"i m h1 tag"), 
            React.createElement("h2", {},"i m h2 tag")
            ]
            )]
           ]
        );


        const root= ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent);
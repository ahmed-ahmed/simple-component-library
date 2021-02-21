import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./lib/HelloWorld";

const App = () => (
    <div>
        <HelloWorld></HelloWorld>

    </div>
);

ReactDOM.render(<App/>,
    document.getElementById("root"));

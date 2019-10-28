"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var Counter1_1 = require("./components/Counter1");
var Counter2_1 = require("./components/Counter2");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
ReactDom.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(Counter1_1.default, null),
    React.createElement(Counter2_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map
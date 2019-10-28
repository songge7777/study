"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var conter2_1 = require("../store/actions/conter2");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.render = function () {
        var _a = this.props, number = _a.number, increment = _a.increment, decrement = _a.decrement;
        return (React.createElement("div", null,
            React.createElement("p", null, this.props.number),
            React.createElement("div", { onClick: this.props.increment }, "+"),
            React.createElement("div", { onClick: this.props.decrement }, "-")));
    };
    return Counter;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return state.counter2; }, conter2_1.default)(Counter);
//# sourceMappingURL=Counter2.js.map
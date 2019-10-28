"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var counter1_1 = require("./counter1");
var counter2_1 = require("./counter2");
var reducer = redux_1.combineReducers({
    counter1: counter1_1.default,
    counter2: counter2_1.default,
});
exports.default = reducer;
//# sourceMappingURL=index.js.map
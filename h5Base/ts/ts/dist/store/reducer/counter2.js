"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../action-types");
var initState = {
    number: 0
};
function default_1(state, action) {
    if (state === void 0) { state = initState; }
    console.log('counter2');
    switch (action.type) {
        case types.INCREMENT2:
            return { number: state.number + 1 };
        case types.DECREMENT2:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=counter2.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc = __importStar(require("./calc"));
console.log('calc(1, 2):', calc.default(1, 2));
// console.log('calc(1, 2):', calc(1,2) ); // this will error since calc is no longer a function, even in emit result

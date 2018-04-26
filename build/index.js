"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const BlueBird = require("bluebird");
const bash = util_1.promisify && util_1.promisify(child_process_1.exec) || BlueBird.promisify(child_process_1.exec);
function default_1(script, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield bash(script, options);
        let resultString;
        if (result.stderr)
            throw result.stderr;
        if (typeof result !== 'string' && result.stdout)
            resultString = result.stdout.toString();
        return resultString || result;
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
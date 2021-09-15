"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanimeError = void 0;
class HanimeError extends Error {
    constructor(error, ...params) {
        super(HanimeError.makeMessage(error, ...params));
    }
    static makeMessage(error, ...params) {
        params.map((p, i) => error = error.replaceAll(`$${i + 1}`, p));
        return error;
    }
}
exports.HanimeError = HanimeError;
//# sourceMappingURL=HanimeError.js.map
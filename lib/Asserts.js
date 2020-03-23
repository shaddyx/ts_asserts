"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asserts {
    static errorOrString(m) {
        if (typeof m === "string") {
            return new Error(m);
        }
        else {
            return m;
        }
    }
    static assertionMsg(msg) {
        return this.errorOrString(typeof msg == "function" ? msg() : msg);
    }
    static assertTrue(val, msg = "Value should be true") {
        if (!val) {
            throw this.assertionMsg(msg);
        }
    }
    static assertFalse(val, msg = "Value should be false") {
        if (val) {
            throw this.assertionMsg(msg);
        }
    }
    static assertDefined(val, msg = "Value should be defined") {
        if (val != undefined) {
            throw this.assertionMsg(msg);
        }
    }
    static assertNotEmpty(val, msg = "Value should be not empty") {
        if (!val) {
            throw this.assertionMsg(msg);
        }
    }
    static assertEquals(val, val1, msg = "Values should be equals") {
        if (val !== val1) {
            throw this.assertionMsg(msg);
        }
    }
    static assertNotEquals(val, val1, msg = "Value should be not equals") {
        if (val === val1) {
            throw this.assertionMsg(msg);
        }
    }
}
exports.default = Asserts;
//# sourceMappingURL=Asserts.js.map
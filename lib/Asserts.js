"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asserts {
    errorOrString(m) {
        if (typeof m === "string") {
            return new Error(m);
        }
        else {
            return m;
        }
    }
    assertionMsg(msg) {
        return this.errorOrString(typeof msg == "function" ? msg() : msg);
    }
    assertTrue(val, msg = "Value should be true") {
        if (!val) {
            throw this.assertionMsg(msg);
        }
    }
}
exports.Asserts = Asserts;
//# sourceMappingURL=Asserts.js.map
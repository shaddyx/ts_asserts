declare type ErrFunc = (() => string | Error) | string | Error;
export default class Asserts {
    private static errorOrString;
    private static assertionMsg;
    static assertTrue(val: any, msg?: ErrFunc): void;
    static assertFalse(val: any, msg?: ErrFunc): void;
    static assertDefined(val: any, msg?: ErrFunc): void;
    static assertEquals(val: any, val1: any, msg?: ErrFunc): void;
    static assertNotEquals(val: any, val1: any, msg?: ErrFunc): void;
}
export {};
//# sourceMappingURL=Asserts.d.ts.map
declare type ErrFunc = (() => string | Error) | string | Error;
export declare class Asserts {
    private errorOrString;
    private assertionMsg;
    assertTrue(val: any, msg?: ErrFunc): void;
}
export {};
//# sourceMappingURL=Asserts.d.ts.map
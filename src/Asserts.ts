type ErrFunc = (() => string | Error ) | string | Error;
export class Asserts {
    private errorOrString(m: string | Error): Error{
        if (typeof m === "string"){
            return new Error(m);
        } else {
            return m;
        }
    }
    private assertionMsg(msg:ErrFunc): Error{
        return this.errorOrString(typeof msg == "function" ? msg(): msg);
    }

    public assertTrue(val: any, msg:ErrFunc = "Value should be true"){
        if (!val){
            throw this.assertionMsg(msg);
        }
    }

    public assertFalse(val: any, msg:ErrFunc = "Value should be false"){
        if (val){
            throw this.assertionMsg(msg);
        }
    }
    public assertDefined(val: any, msg:ErrFunc = "Value should be defined"){
        if (val != undefined){
            throw this.assertionMsg(msg);
        }
    }
    public assertEquals(val: any, val1: any, msg:ErrFunc = "Values should be equals"){
        if (val !== val1){
            throw this.assertionMsg(msg);
        }
    }
    public assertNotEquals(val: any, val1: any, msg:ErrFunc = "Value should be not equals"){
        if (val === val1){
            throw this.assertionMsg(msg);
        }
    }
}
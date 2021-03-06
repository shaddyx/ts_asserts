type ErrFunc = (() => string | Error ) | string | Error;
export default class Asserts {
    private static errorOrString(m: string | Error): Error{
        if (typeof m === "string"){
            return new Error(m);
        } else {
            return m;
        }
    }
    private static assertionMsg(msg:ErrFunc): Error{
        return this.errorOrString(typeof msg == "function" ? msg(): msg);
    }

    public static assertTrue(val: any, msg:ErrFunc = "Value should be true"){
        if (!val){
            throw this.assertionMsg(msg);
        }
    }

    public static assertFalse(val: any, msg:ErrFunc = "Value should be false"){
        if (val){
            throw this.assertionMsg(msg);
        }
    }
    public static assertDefined(val: any, msg:ErrFunc = "Value should be defined"){
        if (val != undefined){
            throw this.assertionMsg(msg);
        }
    }
    public static assertNotEmpty(val: any, msg:ErrFunc = "Value should be not empty"){
        if (!val){
            throw this.assertionMsg(msg);
        }
    }
    public static assertEquals(val: any, val1: any, msg:ErrFunc = "Values should be equals"){
        if (val !== val1){
            throw this.assertionMsg(msg);
        }
    }
    public static assertNotEquals(val: any, val1: any, msg:ErrFunc = "Value should be not equals"){
        if (val === val1){
            throw this.assertionMsg(msg);
        }
    }
}
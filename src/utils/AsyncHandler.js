const asynchandler=(reqHandler)=>{

    (req , res , next)=>{
        Promise.resolve(reqHandler(req , res , next)).catch((Error)=>next(Error))
    }

}

export {asynchandler};
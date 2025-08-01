class Apierror extends Error{
    constructor( statuscode ,message="something went wrong" ,stack="" ,  errors=[] ){
          this.statuscode=statuscode;
          super(message);
          this.message=message;
          this.data=null;
          this.errors=errors;
          this.success=false;
    }
}

export {Apierror};
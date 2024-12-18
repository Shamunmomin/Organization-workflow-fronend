export interface Empoyee{

    id:number,
    name:string,
    mobileno:string,
    emailid:string,
    createdBy:string,
    createdDate:Date,
    updatedBy:string,
    updatedDate:Date,
    status:string,
    department:string,
    salary:number,
    country:{
        cid:number,
        cname:string 
    }

}
export class User {
    _id: string='';
    user_name: string='';
    email: string='';
    phone: string='';
    password: string='';
    paidCourse_id:Array<any>=[];
    user_type?:string='';
}
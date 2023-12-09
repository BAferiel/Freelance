export class Subscription{
    id_sub:number;
    type_sub:string;
    dateExp_sub:Date;
    constructor() {
        this.id_sub = 0; 
        this.type_sub = ''; 
        this.dateExp_sub = new Date();
      }
}
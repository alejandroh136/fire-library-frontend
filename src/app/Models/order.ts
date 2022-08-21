import { Book } from '../Models/book';
export class Order{
    orderId: number;
    dateLent: Date;
    dateDue:Date;
    books:[Book];

    constructor(orderId:number, dateLent:Date, dateDue:Date, books:[Book]){
        this.orderId = orderId;
        this.dateLent = dateLent;
        this.dateDue = dateDue;
        this.books = books;
    }
};

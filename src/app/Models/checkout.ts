import { Book } from "./book";
export class Checkout{
    customerId:number;
    books : Book[];
    constructor(customerid: number, books: Book[]){
        this.customerId = customerid;
        this.books = books;
    }
}
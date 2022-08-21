export class Book{
    isbn: string;
    title: string;
    publisher:string;
    language:string;
    genre:string;
    pages:number;
    authorId:number;
    authorName:string;
    synopsys:string;
    excerpt:string;
    totalCopies:number;
    avalableCopies:number;
    constructor(isbn:string, title:string, publisher:string, language:string, genre:string, pages:number, authorid:number, authorname:string, synopsys:string, excerpt:string,  totalcopies:number, availablecopies:number){
        this.isbn = isbn;
        this.title = title;
        this.publisher = publisher;
        this.language = language;
        this.genre = genre;
        this.pages = pages;
        this.authorId = authorid;
        this.authorName = authorname
        this.synopsys = synopsys;
        this.excerpt = excerpt;
        this.totalCopies = totalcopies;
        this.avalableCopies = availablecopies;
    }
};
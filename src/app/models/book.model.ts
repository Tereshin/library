export interface IBook {
    id: number;
    title: string;
    author: string;
    publishedAt: { year: number, month: number, day: number };
    addedAt: { year: number, month: number, day: number };
    review?: string;
}

export class Book implements IBook {
    public id: number;
    public title: string;
    public author: string;
    public publishedAt: { year: number, month: number, day: number };
    public addedAt: { year: number, month: number, day: number };
    public review: string;

    constructor(props: any = {}) {
        this.id = props['id'];
        this.title = props['title'];
        this.author = props['authoe'];
        this.publishedAt = props['publishedAt'];
        this.addedAt = props['addedAt'];
        this.review = props['review'];
    }
}

export class PostData {
    image: string
    content: string
    author: string
    date: string

    constructor(image, content, author, date) {
        this.image = image;
        this.content = content;
        this.author = author;
        this.date = date;
    }
}
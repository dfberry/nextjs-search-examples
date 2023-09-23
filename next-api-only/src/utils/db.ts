import data from './../../books.json'

export default class Books {
    static books = data as Book[];

    static getById (id:string):Book{
        return Books.books.filter((book: Book) => book.book_id === id)[0];
    }
}

export type Book = {
    "book_id": string;
    "goodreads_book_id": string;
    "best_book_id": string;
    "work_id": string;
    "books_count": string;
    "isbn": string;
    "isbn13": string;
    "authors": string;
    "original_publication_year": string;
    "original_title": string;
    "title": string;
    "language_code": string;
    "average_rating": string;
    "ratings_count": string;
    "work_ratings_count": string;
    "work_text_reviews_count": string;
    "ratings_1": string;
    "ratings_2": string;
    "ratings_3": string;
    "ratings_4": string;
    "ratings_5": string;
    "image_url": string;
    "small_image_url": string;
  
}

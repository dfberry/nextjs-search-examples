import { Book as BookModel } from "@/utils/db";
import Link from "next/link";
type BookDetailProps = {
  books: BookModel[];
};

const BookList = ({ books }: BookDetailProps) => {
  return (
      <div style={{textAlign: "left"}}>
      {books.map((book: BookModel) => (
        <Link style={{display: "block"}} key={book.book_id} href={`/books/${book.book_id}`}>
          {book.title}
        </Link>
      ))}
      </div >
  );
};

export default BookList;

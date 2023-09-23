import Books, { Book } from "@/utils/db";
import { sortJson } from "@/utils/jsonsort";
export const generateStaticParams = () => {
  const paths = Books.books.map((book: Book) => ({ id: book.book_id }));

  return paths;
};

const getData = (id) => {
  return Books.getById(id);
};

const BooksPage = ({ params }) => {
  const book: Book = sortJson(getData(params.id || []));
  return (
    <div style={{ justifyContent: "left" }}>
      <h1>{book.title}</h1>
      <h3>{book.authors}</h3>
      {Object.keys(book).map((property: string, index: number) => (
        <div key={index} style={{"display": "flex"}}>
          <div>{property}:</div><div>{book[property]}</div>
        </div>
      ))}
    </div>
  );
};

export default BooksPage;

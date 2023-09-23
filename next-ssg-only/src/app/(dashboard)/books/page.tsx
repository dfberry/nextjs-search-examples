import Books, {Book} from '@/utils/db'
import BookList from '@/components/Book/BookList'
import { sortJsonArray } from '@/utils/jsonsort'
const getData = async () => {
  return Books.books
}

const BooksPage = async () => {
  const books: Book[] = await getData()
  return (
    <div>
      <BookList books={sortJsonArray(books, "title")} />
    </div>
  )
}

export default BooksPage

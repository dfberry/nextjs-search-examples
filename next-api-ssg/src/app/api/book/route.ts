import Books from '../../../utils/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json(Books.books)
}


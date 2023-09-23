import { NextResponse } from 'next/server'
import Books, { Book } from '../../../../utils/db'


type DocRouteParams = {
    params: {
        id: string
    }
}

export const GET = async (request: Request, { params }: DocRouteParams) => {
    return NextResponse.json(Books.getById(params.id) as Book)
}
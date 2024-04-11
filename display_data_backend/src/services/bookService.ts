import { Books, mockData } from "../mockdata/mockdata";

export class BookService {

    getAllBooks(): Books[] {
        return mockData;
    }

    getBookById(id: number): Books | undefined {
        return mockData.find(book => book.id === id);
    }

}
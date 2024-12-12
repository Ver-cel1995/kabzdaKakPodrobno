import {action} from "@storybook/addon-actions";
import React, {useCallback, useMemo} from "react";


export default {
    title: 'UseCallback',
}

export const UseCallbackExample = () => {
    const [books, setBooks] = React.useState(['React', 'CSS', 'JS', 'HTML']);

    // Используем useMemo для мемоизации фильтрации книг
    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1);
    }, [books]);

    // Используем useCallback для мемоизации функции добавления книги
    const memoizedAddBook = useCallback(() => {
        const newBooks = [...books, 'Angular'];
        setBooks(newBooks);
    }, [books]);

    return (
        <>
            <Book books={newArray} addBook={memoizedAddBook} />
        </>
    );
}

const BooksSecret = (props: {books: string[], addBook: () => void}) => {
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
            {props.books.map((books, i) => <div key={i}>{books}</div>)}
        </div>
    )
}

const Book = React.memo(BooksSecret)



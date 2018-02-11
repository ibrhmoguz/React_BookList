// Action creator, it needs to return action.
// an object with a type property.
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
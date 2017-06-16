"use strict"

//BOOKS REDUCERS
export function booksReducers(state = {
  books: [{
    _id:1,
    title: "this is a book title",
    description: "this is the book description",
    price: 33.25
  },
  {
    _id:2,
    title: "this is the second book title",
    description: "this is the second book description",
    price: 343.25
  }]
}, action) {
  switch (action.type) {
    case "POST_BOOK":
        return {books: [...state.books, ...action.payload]}
      break;
    case "GET_BOOKS_BOOK":
        return {...state, books:[...state.books]}
      break;
    case "DELETE_BOOK":
        //create a copy of the current array of books
        const currentBookToDelete = [...state.books];
        //Determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
          function(book) {
            return book._id === action.payload._id
          }
        );
        //use slice to remove the book at the specified index
        return {
          books:[
            ...currentBookToDelete.slice(0, indexToDelete),
            ...currentBookToDelete.slice(indexToDelete + 1)
          ]}
      break;
    case "UPDATE_BOOK":
        //create a copy of the current array of books
        const currentBookToUpdate = [...state.books];
        //Determine at which index in books array is the book to be deleted
        const indexToUpdate = currentBookToUpdate.findIndex(
          function(book) {
            return book._id === action.payload._id
          }
        );
        const newBookToUpdate = {
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        }
         //use slice to remove the book at the specified index
        return {
          books:[
            ...currentBookToUpdate.slice(0, indexToUpdate),
            newBookToUpdate,
            ...currentBookToUpdate.slice(indexToUpdate + 1)
          ]}
      break;
  }
  return state;
}

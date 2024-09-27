import { defineStore } from "pinia";

export const useAdStore = defineStore("adStore", {
  state: () => ({
    books: [
      {
        id: 1,
        title: "Crime and Punishment",
        author: "Fyodor M. Dostoevsky",
        image: "src/assets/book1.jpg",
        pages: 501,
        price: 6,
        fav: false,
      },
      {
        id: 2,
        title: "Illiad",
        author: "Homer",
        image: "src/assets/book2.jpg",
        pages: 405,
        price: 5,
        description: "Brutalan je golf",
        fav: true,
      },
      {
        id: 3,
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        image: "src/assets/book3.jpg",
        pages: 250,
        price: 5,
        fav: false,
      },
      {
        id: 4,
        title: "Hamlet",
        author: "William Shakespeare",
        image: "src/assets/book4.jpg",
        pages: 184,
        price: 7,
        fav: false,
      },
      {
        id: 5,
        title: "1984",
        author: "George Orwell",
        image: "src/assets/book5.jpg",
        pages: 354,
        price: 5,
        fav: true,
      },
    ],
  }),
  getters: {
    allAds: (state) => state.books,
    getAdById: (state) => {
      return (id) => state.books.find((ad) => ad.id === id);
    },
  },
  actions: {
    removeBook(id) {
      this.books = this.books.filter((x) => x.id !== id);
    },
    setToFav(book) {
      this.getAdById(book.id).fav = !this.getAdById(book.id).fav;
    },
  },
});

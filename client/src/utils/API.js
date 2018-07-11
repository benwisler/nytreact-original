import axios from "axios";
const key = "f4b1a253a56d406b91b41dabf145293a"
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
export default {
  // Gets all books
  getArticles: function(keyword, startDate, endDate) {
    return axios.get(url + key + "?q=" + keyword 
        + "?begin_date=" + startDate + "?end_date=" + endDate);
  },
  // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
  // Deletes the book with the given id
  delete: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  save: function(id) {
    return axios.post("/api/articles/", id);
  }
};

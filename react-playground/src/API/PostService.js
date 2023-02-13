import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }

  static async getTodos() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return response;
  }

  static async getTodosByQuery(query) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?query=${query}`
    );
    return response;
  }
}

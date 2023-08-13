import { HttpService } from "./02-open-close-c(solution)";

export class TodoService { 

  constructor(private _http: HttpService) {}
  async getTodoItems() {
      const { data } = await this._http.get('https://jsonplaceholder.typicode.com/todos/');
      return data;
  }
}


export class PostService {
  constructor(private _http: HttpService) {}
  async getPosts() {
      const { data } = await this._http.get('https://jsonplaceholder.typicode.com/posts');
      return data;
  }
}


export class PhotosService {
  constructor(private _http: HttpService) {}
  async getPhotos() {
      const { data } = await this._http.get('https://jsonplaceholder.typicode.com/photos');
      return data;
  }

}


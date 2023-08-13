import { DatabaseProvider } from "./05-dependency-c(solution)";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private _postProvider: DatabaseProvider) {}

    async getPosts() {
        this.posts = await this._postProvider.getPosts();

        return this.posts;
    }
}
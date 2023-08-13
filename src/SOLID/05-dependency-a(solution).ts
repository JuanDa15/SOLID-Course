import { PostService } from './05-dependency-b(solution)';
import { WebApiPostService, JsonDataBaseService, LocalDataBaseService } from './05-dependency-c(solution)';


// Main
(async () => {
    const dbService = new JsonDataBaseService()
    const fakeDbService = new LocalDataBaseService()
    const apiService = new WebApiPostService();
    const postService = new PostService(apiService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();
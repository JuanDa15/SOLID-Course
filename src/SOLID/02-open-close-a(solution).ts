import { PhotosService, PostService, TodoService } from './02-open-close-b(solution)';
import { HttpService } from './02-open-close-c(solution)';

(async () => {
    const httpService = new HttpService();
    const todoService = new TodoService(httpService);
    const postService = new PostService(httpService);
    const photosService = new PhotosService(httpService);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();

    
    console.log({ todos, posts, photos });
    

})();
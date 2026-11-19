import HttpClient from "@shared/infrastructure/http-client";
import {HttpPostRepository} from "@features/posts/infrastructure/api/http-post-repository.ts";
import {GetAllPostUseCase} from "@features/posts/application/get-all-post-usecase.ts";
import {
    createPostStore,
    getAllPostStore,
    getPostStore,
    updatePostStore
} from "@features/posts/presentation/store/posts.ts";
import {CreatePostUseCase} from "@features/posts/application/create-post-usecase.ts";
import {GetPostUseCase} from "@features/posts/application/get-post-usecase.ts";
import {UpdatePostUseCase} from "@features/posts/application/update-post-usecase.ts";

// instance slayer infrastructure
const httpClient = new HttpClient(import.meta.env.PUBLIC_API_URL);
const postsRepository = new HttpPostRepository(httpClient);

// instance slayer application
const getPosts = new GetAllPostUseCase(postsRepository);
const createPost = new CreatePostUseCase(postsRepository);
const getPost = new GetPostUseCase(postsRepository);
const updatePost = new UpdatePostUseCase(postsRepository);

// exports
export const container = {
    getAllPost : getAllPostStore(getPosts),
    createPost: createPostStore(createPost),
    getPostById: getPostStore(getPost),
    updatePost: updatePostStore(updatePost)
}
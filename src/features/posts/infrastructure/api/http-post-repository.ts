import type {PostRepository} from "@features/posts/domain/adapters/out/post-repository.ts";
import type {CreatePost, Post, UpdatePost} from "@features/posts/domain/models/post.ts";
import type HttpClient from "@shared/infrastructure/http-client.ts";
import type PostEntity from '@features/posts/infrastructure/api/entities/post-entity.ts'
import PostMapper from "@features/posts/infrastructure/api/mappers/post-mapper.ts";

export class HttpPostRepository implements PostRepository{

    private PATH_POST: string = "/posts";

    constructor(private readonly httpClient: HttpClient) {
    }

    async getAll(): Promise<Post[]> {
        const posts = await this.httpClient.get<PostEntity[]>(this.PATH_POST);
        return posts.map(PostMapper.convertToPostDto)
    }

    async create(post: CreatePost): Promise<Post> {
        const postEntity = PostMapper.convertToCreatePostEntity(post);
        const createdPost = await this.httpClient.post<PostEntity>(this.PATH_POST, postEntity);
        return PostMapper.convertToPostDto(createdPost);
    }

    async getById(id: number): Promise<Post> {
        const post = await this.httpClient.get<PostEntity>(`${this.PATH_POST}/${id}`);
        return PostMapper.convertToPostDto(post);
    }

    async update(id: number, post: UpdatePost): Promise<Post> {
        const postEntity = PostMapper.convertToUpdatePostEntity(post);
        const updatedPost = await this.httpClient.put<PostEntity>(`${this.PATH_POST}/${id}`, postEntity);
        return PostMapper.convertToPostDto(updatedPost);
    }
}
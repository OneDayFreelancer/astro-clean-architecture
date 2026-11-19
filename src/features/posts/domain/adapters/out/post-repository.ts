import type {CreatePost, Post, UpdatePost} from "@features/posts/domain/models/post.ts";

export interface PostRepository {
    getAll(): Promise<Post[]>;
    getById(id: number): Promise<Post>;
    create(post: CreatePost): Promise<Post>;
    update(id: number, post: UpdatePost): Promise<Post>;
}
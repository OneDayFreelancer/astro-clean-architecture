import type {PostRepository} from "@features/posts/domain/adapters/out/post-repository";
import {Post} from "@features/posts/domain/models/post";

export class GetAllPostUseCase {
    constructor(private readonly post: PostRepository){
    }
    execute(): Promise<Post[]>{
        return this.post.getAll();
    }
}
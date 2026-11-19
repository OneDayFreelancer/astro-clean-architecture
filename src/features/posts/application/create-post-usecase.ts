import type {PostRepository} from "@features/posts/domain/adapters/out/post-repository";
import type {CreatePost, Post} from "@features/posts/domain/models/post";

export class CreatePostUseCase {
    constructor(private readonly post: PostRepository){
    }
    execute(post: CreatePost): Promise<Post>{
        return this.post.create(post);
    }
}
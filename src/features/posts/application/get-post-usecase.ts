import type {Post} from "@features/posts/domain/models/post.ts";
import type {PostRepository} from "@features/posts/domain/adapters/out/post-repository.ts";

export class GetPostUseCase {
    constructor(private readonly postRepository: PostRepository) {
    }
    execute(id: number): Promise<Post> {
        return this.postRepository.getById(id);
    }
}
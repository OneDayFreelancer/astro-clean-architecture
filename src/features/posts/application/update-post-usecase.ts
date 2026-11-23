import type {UpdatePost} from "@features/posts/domain/models/post.ts";
import type {PostRepository} from "@features/posts/domain/adapters/out/post-repository.ts";

export class UpdatePostUseCase {
    constructor(private readonly postRepository: PostRepository) {
    }

    execute(postId: number, postUpdate: UpdatePost) {
        return this.postRepository.update(postId, postUpdate);
    }
}
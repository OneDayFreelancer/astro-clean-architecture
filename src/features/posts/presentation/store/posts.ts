import {nanoquery} from "@nanostores/query";
import {type CreatePost, Post, type UpdatePost} from "@features/posts/domain/models/post"
import {GetAllPostUseCase} from "@features/posts/application/get-all-post-usecase"
import {CreatePostUseCase} from "@features/posts/application/create-post-usecase";
import type {GetPostUseCase} from "@features/posts/application/get-post-usecase.ts";
import type {UpdatePostUseCase} from "@features/posts/application/update-post-usecase.ts";
import {atom} from "nanostores";

export const $postId = atom<number | null>(null);

const [createFetcherStore, createMutatorStore] = nanoquery();

const getAllPostStore = (getAllPost: GetAllPostUseCase) =>
    createFetcherStore<Post[]>(["posts"], {
        fetcher: () => getAllPost.execute(),
    });

const createPostStore = (createPost: CreatePostUseCase) =>
    createMutatorStore<CreatePost>(
        async ({ data, invalidate }) => {
            const created = await createPost.execute(data);
            invalidate("posts");
            return created;
        }
    );

const getPostStore = (getPost: GetPostUseCase) =>
    createFetcherStore<Post>(["post", $postId], {
        fetcher: (_, id) => getPost.execute(Number(id)),
    });

const updatePostStore = (updatePost: UpdatePostUseCase) =>
    createMutatorStore<{id: number} & UpdatePost>(
        async ({ data, invalidate }) => {
            const updated = await updatePost.execute(data.id, data);
            invalidate((key) => key.startsWith("post"));
            return updated;
        }
    );

export {
    getAllPostStore,
    getPostStore,
    createPostStore,
    updatePostStore,
}

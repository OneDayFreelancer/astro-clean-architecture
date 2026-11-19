export class Post {
    constructor(readonly id: number,
                readonly title: string,
                readonly body: string) {
    }
}

export type CreatePost = Pick<Post, 'title' | 'body'> & {
    userId?: number
}

export type UpdatePost = Post;
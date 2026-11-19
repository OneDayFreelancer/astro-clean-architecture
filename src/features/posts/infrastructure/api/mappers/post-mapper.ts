import type Entity from "@features/posts/infrastructure/api/entities/post-entity";
import type {Post, CreatePost, UpdatePost} from "@features/posts/domain/models/post";

export default class PostMapper {
    private static readonly NUMBER_ID_DEFAULT: number = 1;

    static convertToPostDto(entity: Entity): Post {
        return {
            id: entity.id!,
            title: entity.title,
            body: entity.body
        };
    }

    static convertToCreatePostEntity(post: CreatePost): Entity {
        return {
            idUser: post.userId ?? this.NUMBER_ID_DEFAULT,
            title: post.title,
            body: post.body
        };
    }

    static convertToUpdatePostEntity(post: UpdatePost): Entity {
        return {
            id: post.id,
            idUser: this.NUMBER_ID_DEFAULT,
            title: post.title,
            body: post.body
        };
    }
}
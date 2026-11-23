import type {UserEntity} from "@features/users/infrastructure/http/entities/user-entity.ts";
import type {UserGet} from "@features/users/domain/models/user-get.ts";
import type {UserCreate} from "@features/users/domain/models/user-create.ts";
import type {UserUpdate} from "@features/users/domain/models/user-update.ts";


export class UserMapper {
    static toDomain(user: UserEntity): UserGet {
        return {
            id: user.id!,
            name: user.name,
            username: user.username,
        };
    }

    static toEntity(user: UserCreate): UserEntity {
        return {
            name: user.name,
            username: user.username,
            email: user.email,
        };
    }

    static toEntityUpdate(user: UserUpdate): UserEntity {
        return {
            name: user.name,
            username: user.username,
            email: user.email,
        };
    }
}
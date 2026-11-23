import type {UserCreate} from "@features/users/domain/models/user-create.ts";
import type {UserGet} from "@features/users/domain/models/user-get.ts";
import type {UserUpdate} from "@features/users/domain/models/user-update.ts";

export interface UserRepositoryPort {
    getUsers(): Promise<UserGet[]>;
    createUser(user: UserCreate): Promise<UserGet>;
    getUserById(id: number): Promise<UserGet>;
    updateUser(id: number, user: UserUpdate): Promise<UserGet>;
}
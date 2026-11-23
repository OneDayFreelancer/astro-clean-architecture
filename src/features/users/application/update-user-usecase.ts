import type {UserRepositoryPort} from "@features/users/domain/ports/user-repository-port.ts";
import type {UserGet} from "@features/users/domain/models/user-get.ts";
import type {UserUpdate} from "@features/users/domain/models/user-update.ts";

export class UpdateUserUseCase{
    constructor(private readonly userRepositoryPort : UserRepositoryPort) {
    }
    execute(id: number, user: UserUpdate): Promise<UserGet> {
        return this.userRepositoryPort.updateUser(id, user);
    }
}
import type {UserGet} from "@features/users/domain/models/user-get.ts";
import type {UserRepositoryPort} from "@features/users/domain/ports/user-repository-port.ts";

export class GetUsersUseCase {
    constructor(private readonly userRepositoryPort: UserRepositoryPort) {
    }

    execute(): Promise<UserGet[]> {
        return this.userRepositoryPort.getUsers();
    }
}
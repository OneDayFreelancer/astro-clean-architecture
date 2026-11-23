import type {UserRepositoryPort} from "@features/users/domain/ports/user-repository-port.ts";
import type {UserGet} from "@features/users/domain/models/user-get.ts";

export class GetUserByIdUseCase{
    constructor(private readonly userRepositoryPort : UserRepositoryPort) {
    }
    execute(id: number): Promise<UserGet> {
        return this.userRepositoryPort.getUserById(id);
    }
}
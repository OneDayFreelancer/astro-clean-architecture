import type {UserRepositoryPort} from "@features/users/domain/ports/user-repository-port.ts";
import type {UserCreate} from "@features/users/domain/models/user-create.ts";

export class CreateUserUseCase {
    constructor(private readonly userRepositoryPort: UserRepositoryPort) {}
    execute(userCreate: UserCreate){
        return this.userRepositoryPort.createUser(userCreate);
    }
}
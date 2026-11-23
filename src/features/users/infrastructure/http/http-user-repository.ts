import type {UserRepositoryPort} from "@features/users/domain/ports/user-repository-port.ts";
import  HttpClient from "@shared/infrastructure/http-client.ts";
import type {UserEntity} from "@features/users/infrastructure/http/entities/user-entity.ts";
import {UserMapper} from "@features/users/infrastructure/http/mappers/user-mapper.ts";
import type {UserCreate} from "@features/users/domain/models/user-create.ts";
import type {UserGet} from "@features/users/domain/models/user-get.ts";
import type {UserUpdate} from "@features/users/domain/models/user-update.ts";

export class HttpUserRepository implements UserRepositoryPort {
    constructor(private readonly http: HttpClient) {
    }

    async getUsers(): Promise<UserGet[]> {
        const users = await this.http.get<UserEntity[]>("/users");
        return users.map(user => UserMapper.toDomain(user));
    }

    async createUser(userCreate: UserCreate): Promise<UserGet>{
        const entityCreate = UserMapper.toEntity(userCreate);
        const user = await this.http.post<UserEntity>("/users", entityCreate);
        return UserMapper.toDomain(user);
    }
    async getUserById(id: number): Promise<UserGet> {
        const user = await this.http.get<UserEntity>(`/users/${id}`);
        return UserMapper.toDomain(user);
    }
    async updateUser(id: number, userUpdate: UserUpdate): Promise<UserGet> {
        const entityUpdate = UserMapper.toEntityUpdate(userUpdate);
        const user = await this.http.put<UserEntity>(`/users/${id}`, entityUpdate);
        return UserMapper.toDomain(user);
    }
}
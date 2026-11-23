import {HttpUserRepository} from "@features/users/infrastructure/http/http-user-repository.ts";
import HttpClient from "@shared/infrastructure/http-client.ts";
import {GetUsersUseCase} from "@features/users/application/get-users-usecase.ts";
import {CreateUserUseCase} from "@features/users/application/create-user-usecase.ts";
import {GetUserByIdUseCase} from "@features/users/application/get-user-by-id-usecase.ts";
import {UpdateUserUseCase} from "@features/users/application/update-user-usecase.ts";

// infrastructure
const httpclient = new HttpClient(import.meta.env.PUBLIC_API_URL);
const userRepository = new HttpUserRepository(httpclient);

// application
const getUsers = new GetUsersUseCase(userRepository);
const createUser = new CreateUserUseCase(userRepository);
const getUserById = new GetUserByIdUseCase(userRepository);
const updateUser = new UpdateUserUseCase(userRepository);

export const userContainer = {
  getUsers,
  createUser,
  getUserById,
  updateUser
};
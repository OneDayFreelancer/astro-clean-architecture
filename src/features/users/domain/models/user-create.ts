import type {UserGet} from "@features/users/domain/models/user-get.ts";

export type UserCreate = Omit<UserGet, "id"> & {
    email: string;
};
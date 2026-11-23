import type {UserGet} from "@features/users/domain/models/user-get.ts";

export type UserUpdate = Omit<UserGet, "id"> & {
    email: string;
};
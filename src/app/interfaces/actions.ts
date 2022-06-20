import { User } from "./user";

type ActionType = 'logout' | 'logout-error' | 'login' | 'login-error' | 'user-added' | 'user-deleted' | 'all-users-deleted';

export interface Action {
    password?: string;
    user?: User;
    time: Date;
    type: ActionType;
}

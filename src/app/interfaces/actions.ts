import { User } from "./user";

type ActionType = 'logout' |
    'logout-error' |
    'login' |
    'login-error' |
    'user-added' |
    'user-deleted' |
    'all-users-deleted';

export interface Action {
    time: Date;
    type: ActionType;
    password?: string;
    user?: User;
    deleteReason?: string;
}

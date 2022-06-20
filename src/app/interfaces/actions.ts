type ActionType = 'logout' | 'logout-error' | 'login' | 'login-error' | 'user-added' | 'user-deleted' | 'all-users-deleted';

export interface Action {
    password?: string;
    time: Date;
    type: ActionType;
}

export interface Action {
    password?: string;
    time: Date;
    type: 'logout' | 'logout-error' | 'login' | 'login-error';
}

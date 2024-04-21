export const TODOS = '/';
export const TODOS_CREATE = '/create';
export const TODOS_UPDATE = '/:id/update';
export const PROFILE = '/profile';
export const LOGIN = '/login';

export const LOGS = '/logs';


export const getTodoEditLink = (id: string) => `/${id}/update`;

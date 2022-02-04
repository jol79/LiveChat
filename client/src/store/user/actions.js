import { ActionType } from './common';

const addUser = ({user, current_user_id}) => ({
    type: ActionType.ADD,
    payload: {
        user: {
            ...user,
            current_user_id,
        },
    },
});

const updateUser = ({user_id, current_user_id}) => ({
    type: ActionType.UPDATE,
    payload: {
        user,
    },
});

const deleteUser = ({user_id, current_user_id}) => ({
    type: ActionType.DELETE,
    payload: {
        user,
    },
});

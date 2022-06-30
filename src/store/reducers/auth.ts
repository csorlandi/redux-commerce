import { ActionType } from "../types/actions";

const initialState = {};

export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        default:
            return state;
    }
};
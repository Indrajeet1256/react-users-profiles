import { ActionType, InitialStateType } from "../types/types";
import { ACTIONS } from "./actions";

export const usersReducer = (state: InitialStateType, action: ActionType) => {
	switch (action.type) {
		case ACTIONS.MAKE_REQUEST:
			return { ...state, users: [], error: null, loading: true };
		case ACTIONS.SET_USERS:
			return { ...state, users: action.payload, error: null, loading: false };
		case ACTIONS.ERROR:
			return { ...state, users: [], error: action.payload, loading: false };
		default:
			return state;
	}
};

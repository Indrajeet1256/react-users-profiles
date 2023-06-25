import { createContext, ReactNode, useContext, useReducer } from "react";
import { UsersContextType, InitialStateType } from "../types/types";
import { usersReducer } from "../reducer/usersReducer";

const UsersContext = createContext<UsersContextType | undefined>(undefined);

const initialState: InitialStateType = {
	users: [],
	error: null,
	loading: false,
};

export const useUsers = () => {
	return useContext(UsersContext) as UsersContextType;
};

export const Provider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(usersReducer, initialState);
	return (
		<UsersContext.Provider value={{ state, dispatch }}>
			{children}
		</UsersContext.Provider>
	);
};

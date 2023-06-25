export type UsersType = {
	id: string | number;
	avatar: string;
	first_name: string;
	last_name: string;
	email: string;
};

export type InitialStateType = {
	users: UsersType[];
	error: string | null;
	loading: boolean;
};

export type ActionType = {
	type: string;
	payload?: any;
};

export type UsersContextType = {
	state: InitialStateType;
	dispatch: (action: ActionType) => void;
};

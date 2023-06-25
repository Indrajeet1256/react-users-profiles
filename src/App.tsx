import { useEffect, useMemo, useState } from "react";
import { API } from "./api/api";
import { useUsers } from "./context/usersContext";
import { ACTIONS } from "./reducer/actions";
import Users from "./components/Users";
import { MainWrapper } from "./App.styled";

const cache = new Map();

export default function App() {
	const [page, setPage] = useState<number>(1);
	const apiInstance = useMemo(() => new API(), []);
	const { dispatch } = useUsers();

	useEffect(() => {
		const abortController = new AbortController();
		const { signal } = abortController;

		async function fetchUsers() {
			dispatch({ type: ACTIONS.MAKE_REQUEST });
			try {
				if (cache.has(page.toString())) {
					const data = cache.get(page.toString());
					dispatch({ type: ACTIONS.SET_USERS, payload: data });
					return;
				}

				const response = await apiInstance.fetchUsers({ signal, page });
				const { data } = response.data;
				cache.set(page.toString(), data);
				dispatch({ type: ACTIONS.SET_USERS, payload: data });
			} catch (error: any) {
				if (error?.code === "ERR_CANCELED") return;
				dispatch({
					type: ACTIONS.ERROR,
					payload: error?.message ?? "Failed To Fetch",
				});
			}
		}
		fetchUsers();
		return () => abortController.abort();
	}, [dispatch, apiInstance, page]);

	const handlePageChange = (page: number) => {
		setPage(page);
	};

	return (
		<MainWrapper>
			<Users page={page} handlePageChange={handlePageChange} />
		</MainWrapper>
	);
}

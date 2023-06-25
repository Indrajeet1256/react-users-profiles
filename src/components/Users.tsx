import React, { useMemo, useState } from "react";
import { useUsers } from "../context/usersContext";
import UserCard from "./UserCard";
import { UsersWrapper, UsersCardWrapper, Button } from "./styled/Users.styled";
import SearchComponent from "./SearchComponent";
import { UsersType } from "../types/types";

type UsersProps = {
	page: number;
	handlePageChange: (page: number) => void;
};

const filterFunction = (user: UsersType, searchTerm: string) => {
	return (
		user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
	);
};

export default function Users({ handlePageChange, page }: UsersProps) {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const {
		state: { users, loading, error },
	} = useUsers();
	const filteredUsers = useMemo(() => {
		const newUsers = users.filter((user) => filterFunction(user, searchTerm));
		return newUsers;
	}, [users, searchTerm]);

	const handleSetSearchTerm = (searchTerm: string) => {
		setSearchTerm(searchTerm);
	};

	const changePage = (page: number) => {
		setSearchTerm("");
		handlePageChange(page);
	};

	return (
		<UsersWrapper>
			{loading && !error && <p>Loading...</p>}
			{error && !loading && <p>{error}</p>}
			{!!users.length && (
				<>
					<SearchComponent
						searchTerm={searchTerm}
						handleSetSearchTerm={handleSetSearchTerm}
					/>
					<UsersCardWrapper>
						{filteredUsers.map((user) => (
							<UserCard user={user} key={user.id} />
						))}
					</UsersCardWrapper>
					{page === 1 ? (
						<Button type="button" onClick={() => changePage(2)}>
							Next Page
						</Button>
					) : (
						<Button type="button" onClick={() => changePage(1)}>
							Prev Page
						</Button>
					)}
				</>
			)}
		</UsersWrapper>
	);
}

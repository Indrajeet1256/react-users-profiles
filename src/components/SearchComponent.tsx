import { ChangeEvent } from "react";
import { SearchForm, FormGroup, FormControl } from "./styled/SearchStyles";

type SearchComponentProps = {
	searchTerm: string;
	handleSetSearchTerm: (searchTerm: string) => void;
};

export default function SearchComponent({
	searchTerm,
	handleSetSearchTerm,
}: SearchComponentProps) {
	return (
		<SearchForm>
			<FormGroup>
				<FormControl
					value={searchTerm}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleSetSearchTerm(e.target.value)
					}
					type="text"
					placeholder="Search For User..."
				/>
			</FormGroup>
		</SearchForm>
	);
}

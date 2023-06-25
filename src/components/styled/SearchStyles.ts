import { styled } from "styled-components";

export const SearchForm = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const FormGroup = styled.div`
	display: flex;
`;

export const FormControl = styled.input`
	flex: 1;
	padding: 16px 8px;
	border: 1px solid #ccc;
	font-size: 1rem;
	border-radius: 5px;
	outline: none;
	transition: 0.3s ease;
	&:focus {
		border-color: #e040fb;
	}
`;

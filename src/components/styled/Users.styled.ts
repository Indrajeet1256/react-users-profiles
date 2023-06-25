import { styled } from "styled-components";

export const UsersWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
	padding: 1rem;
`;

export const UsersCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	align-self: flex-end;
	padding: 8px 16px;
	border: none;
	outline: none;
	background-color: #e040fb;
	color: #fff;
	border-radius: 3px;
	cursor: pointer;
	text-transform: uppercase;
`;

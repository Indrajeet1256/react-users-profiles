import { styled } from "styled-components";

export const UserCard = styled.article`
	position: relative;
	width: 300px;
	min-height: 250px;
	border-radius: 5px;
	background-color: #ffffff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Avatar = styled.img`
	display: block;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	align-self: center;
	object-fit: cover;
`;

export const Badge = styled.div`
	position: absolute;
	right: -5px;
	top: -5px;
	width: 30px;
	height: 30px;
	display: inline-grid;
	place-items: center;
	background: green;
	border-radius: 50%;
	font-weight: 500;
	color: white;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
`;

export const UserInfoHeading = styled.h2`
	font-size: 1.2rem;
	margin: 0;
	display: inline-flex;
	align-items: center;
	gap: 5px;
`;

export const UserInfoSubheading = styled.small`
	display: inline-flex;
	align-items: center;
	gap: 5px;
	color: rgb(0 0 0/0.6);
`;

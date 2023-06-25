import React from "react";
import {
	UserCard as UserCardWrapper,
	Avatar,
	UserInfo,
	Badge,
	UserInfoHeading,
	UserInfoSubheading,
} from "./styled/UserCard.styled";
import { UsersType } from "../types/types";
import { HiOutlineUserCircle, HiOutlineMail } from "react-icons/hi";

type UserCardProps = {
	user: UsersType;
};

export default function UserCard({ user }: UserCardProps) {
	return (
		<UserCardWrapper>
			<Avatar src={user.avatar} />
			<Badge>{user.id}</Badge>
			<UserInfo>
				<UserInfoHeading>
					<HiOutlineUserCircle />
					{user.first_name} {user.last_name}
				</UserInfoHeading>
				<UserInfoSubheading>
					<HiOutlineMail />
					{user.email}
				</UserInfoSubheading>
			</UserInfo>
		</UserCardWrapper>
	);
}

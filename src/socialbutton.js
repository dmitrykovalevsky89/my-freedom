import React from 'react';
import { Icon } from "./icon";

export const SocialButton = ({ type }) => (
	<a href="#">
		<Icon name={type} />
	</a>
);
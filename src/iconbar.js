import React from "react";
import { Icon } from "./icon";
import "./iconbar.css";

export const IconBar = ({ orientation }) => {
	return (
		<div className={orientation}>
			<div className="icon-bar">
				<a className="active" href="#">
					<Icon name="home" />
				</a>
				<a href="#">
					<Icon name="search" />
				</a>
				<a href="#">
					<Icon name="envelope" />
				</a>
				<a href="#">
					<Icon name="globe" />
				</a>
				<a href="#">
					<Icon name="trash" />
				</a>
			</div>
		</div>
	)
};
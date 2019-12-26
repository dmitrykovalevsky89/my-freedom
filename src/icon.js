import React from 'react';

export const Icon = ({ name, children }) => (
	<i className={`fa fa-${name}`}>{children}</i>
);
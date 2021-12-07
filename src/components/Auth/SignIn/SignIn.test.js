import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';

test('verify component', () => {
	const { getByText } = render(<SignIn />);
	const linkElement = getByText(/SignIn/i);
	expect(linkElement).toBeInTheDocument();
});

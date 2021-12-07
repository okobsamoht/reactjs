import React from 'react';
import { render } from '@testing-library/react';
import SignOut from './SignOut';

test('verify component', () => {
	const { getByText } = render(<SignOut />);
	const linkElement = getByText(/SignOut/i);
	expect(linkElement).toBeInTheDocument();
});

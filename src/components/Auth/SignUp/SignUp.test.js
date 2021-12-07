import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';

test('verify component', () => {
	const { getByText } = render(<SignUp />);
	const linkElement = getByText(/SignUp/i);
	expect(linkElement).toBeInTheDocument();
});

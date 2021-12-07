import React from 'react';
import { render } from '@testing-library/react';
import Auth from './Auth';

test('verify component', () => {
	const { getByText } = render(<Auth />);
	const linkElement = getByText(/Auth/i);
	expect(linkElement).toBeInTheDocument();
});

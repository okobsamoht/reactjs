import React from 'react';
import { render } from '@testing-library/react';
import ResetPass from './ResetPass';

test('verify component', () => {
	const { getByText } = render(<ResetPass />);
	const linkElement = getByText(/ResetPass/i);
	expect(linkElement).toBeInTheDocument();
});

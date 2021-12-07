import React from 'react';
import { render } from '@testing-library/react';
import Messages from './Messages';

test('verify component', () => {
	const { getByText } = render(<Messages />);
	const linkElement = getByText(/Messages/i);
	expect(linkElement).toBeInTheDocument();
});

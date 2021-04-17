import React from 'react';
import { render } from '@testing-library/react';
import Backdoor from './Backdoor';

test('verify component', () => {
	const { getByText } = render(<Backdoor />);
	const linkElement = getByText(/Backdoor/i);
	expect(linkElement).toBeInTheDocument();
});

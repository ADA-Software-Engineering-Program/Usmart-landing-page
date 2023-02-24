import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders "Trivia" text', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn more/i);
	expect(linkElement).toBeInTheDocument();
});

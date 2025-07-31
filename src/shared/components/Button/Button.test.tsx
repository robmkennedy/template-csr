import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button.tsx';
import { MantineProvider } from '@mantine/core';

describe('Button Component', () => {
    it('renders the button with the correct label', () => {
        render(
            <MantineProvider>
                <Button label='Click Me' onClick={() => {}} />
            </MantineProvider>
        );
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('calls the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button label='Click Me' onClick={handleClick} />);
        await userEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

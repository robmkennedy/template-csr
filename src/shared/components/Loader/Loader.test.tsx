import { describe, it, expect } from 'vitest';
import { render, screen } from '~test/testUtils'
import { Loader } from '~shared/components/Loader/Loader';

describe('Loader', () => {
    it('shows the Loader message text', () => {
        render(<Loader message='sample message'/>)

        expect(screen.getByText('sample message')).toBeInTheDocument();

        screen.debug(); // prints out the jsx in the App component unto the command line
    })
})
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './';
import { ThemeProvider } from '../../utils/context';
// import { sum } from './';

// test('Ma fonction sum', () => {
//   const result = sum(3, 7);
//   expect(result).toBe(10);
// });

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(
      //level 2 because it's an h2
      screen.getByRole('heading', {
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    ).toBeTruthy();
    // to find see the component :
    // screen.debug();
  });
});

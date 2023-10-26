import { ThemeProvider } from '../../utils/context';
import Footer from './footer';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Footer', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    //to access to the button
    const nightModeButton = screen.getByRole('button');
    //the initiale value should be "light"

    // 1- Vérifier la présence de "☀️".*
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
    // 2- Cliquer sur le bouton.
    fireEvent.click(nightModeButton);
    // 3- Vérifier s'il y a bien "🌙".
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
  });
});

import { ThemeProvider } from '../../utils/context';
import Card from './Card';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Card', () => {
  test('should using "picture" in props', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    );
    // Vérifier que Card utilise bien la picture  que vous lui passez en props.
    const cardPicture = screen.getByRole('img');
    const cardTitle = screen.getByText(/Harry/i);
    expect(cardPicture.src).toBe('http://localhost/myPicture.png');
    expect(cardTitle.textContent).toBe(' Harry Potter ');
  });
  test('should add ⭐️ arround title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    );
    const cardTitle = screen.getByText(/Harry/i);
    const parentNode = cardTitle.closest('div');
    fireEvent.click(parentNode);
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️');
  });
});

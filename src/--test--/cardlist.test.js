import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Cardlist from '../cardlist';

test('renders the heading and virtualized grid', () => {
  render(<Cardlist />);
  expect(screen.getByText(/Home Products lists/i)).toBeInTheDocument();
});

test('show scroll-to-top button after scrolling and scrolls to top on click', async () => {
  render(<Cardlist />);
  const gridContainer = document.querySelector('.card-grid');
  gridContainer.scrollTo = jest.fn();
  fireEvent.scroll(gridContainer, { target: { scrollTop: 400 } });

  const newBtn = await waitFor(() =>
    screen.getByRole('button', { name: /top/i })
  );
  fireEvent.click(newBtn);

  expect(gridContainer.scrollTo).toHaveBeenCalledWith({
    top: 0,
    behavior: 'smooth'
  });
});


test('only render visible cards using virtual scrolling',async()=>{
  render(<Cardlist />);
  expect(await screen.findByText('product 1')).toBeInTheDocument();
  expect(screen.queryByText('product 999')).not.toBeInTheDocument();
})

test('renders product images in cards', () => {
  render(<Cardlist />);

  const images = screen.queryAllByRole('img', { name: /product image/i });
  expect(images.length).toBeGreaterThan(0);
  expect(images[0]).toHaveAttribute('src');
  expect(images[0]).toHaveAttribute('alt','product image');
});

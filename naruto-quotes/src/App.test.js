import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button';
import Quotes from './components/Quotes';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getQuote } from './services/QuoteService';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders the app with a button and a quote', () => {
  
  render(<App />);
  const quoteEl = screen.getByRole('button');
  const speakerEl = screen.getByRole('img');
  const buttonEl = screen.getByText('loading');

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();

});

test('renders received quote, speaker and a button', () => {
  
  render(<Quotes quote={quote} speaker={speaker} />);
  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);
  const buttonEl = screen.getByRole('button');

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();

});

test('renders button with text', () => {

  render(<Button>Test</Button>);
  const buttonEl = screen.getByText('Test');
  expect(buttonEl).toBeInTheDocument();

});

test('calls a callback when button is pressed', () => {

  const callback = jest.fn();
  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}></Quotes>);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);
  expect(callback).toHaveBeenCalledTimes(1);

});

const response = { speaker: 'Speaker', quote: 'test quote' };
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transform json response into object', async () => {

  const quote = await getQuote();
  expect(quote).toStrictEqual(response);

});

test('calls api on button click and update its text', async () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and renders its response', async () => {

  render(<App />);
  const quoteEl = await screen.findByText(/test quote/i);
  expect(quoteEl).toBeInTheDocument();

});
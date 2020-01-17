import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Players from './components/Players'

test('does app render', () => {
  const app = render(<App/>);
})

test('does players component render', () => {
  const players = render(<Players/>)
})

test('does axios call populate', () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    expect(card).toBeInTheDocument;
  })
})
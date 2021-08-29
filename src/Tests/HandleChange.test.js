import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App';

const setup = () => {
    const utils = render(<App />)
    const input = utils.getByTestId('search')
    return {
      input,
      ...utils,
    }
  }

test('Input value state should match searched words', () => {
  const {input,getByText} = setup()
  expect(input.value).toBe('')
  expect(getByText('wonder woman')).toBeInTheDocument()
  expect(getByText('spider man')).toBeInTheDocument()

  fireEvent.change(input, {target: {value: 'woman'}})
  expect(input.value).toBe('woman')
  expect(getByText('wonder woman')).toBeInTheDocument()
})
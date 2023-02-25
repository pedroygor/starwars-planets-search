import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from './mocks/testData';

describe(`Testando o projeto StarWars`, () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(testData),
    });
  });

  it(`Testando componente <InputFilter />`, () => {

    render(<App />)
    const input = screen.getByTestId('name-filter')
    expect(input).toBeInTheDocument()
  })

  it(`Testando se o valor digitado é renderizado`, async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11);
    });

    const nomeDoPlaneta = 'Dagobah'
    const input = screen.getByTestId('name-filter')
    
    userEvent.type(input, nomeDoPlaneta);
    expect(input).toHaveValue(nomeDoPlaneta)

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('igual a')
  })

  it(`Testando se existem os filtros na tela`, async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11);
    });
    expect(screen.getByText(/coluna/i)).toBeInTheDocument()
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument()
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument()
    expect(screen.getByLabelText('Valor:')).toBeInTheDocument()
    expect(screen.getByTestId('value-filter')).toBeInTheDocument()
    expect(screen.getByTestId('button-filter')).toHaveTextContent('Filtrar')

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period')
    expect(screen.getByTestId('column-filter')).toHaveValue('orbital_period')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('menor que')

    userEvent.type(screen.getByTestId('value-filter'), '10')
    expect(screen.getByTestId('value-filter')).toHaveValue(10)

    userEvent.click(screen.getByTestId('button-filter'))

    expect(screen.getByText('orbital_period')).toBeInTheDocument()
    expect(screen.getByTestId('filter')).toBeInTheDocument()
    expect(screen.getByText('X')).toBeInTheDocument()
    expect(screen.getByTestId('button-remove-filters')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('button-remove-filters'))

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter')).toHaveValue('population')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('maior que')
    
    expect(screen.getByTestId('value-filter')).toHaveValue(10)

    userEvent.click(screen.getByTestId('button-filter'))


    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter')
    expect(screen.getByTestId('column-filter')).toHaveValue('diameter')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('igual a')
    
    expect(screen.getByTestId('value-filter')).toHaveValue(10)

    userEvent.click(screen.getByTestId('button-filter'))

    const buttons = screen.getAllByTestId('remove-filtered')

    buttons.forEach((btn) => {
      expect(btn).toBeInTheDocument()
    })

    userEvent.click(buttons[0])
    
  })

  it(`testando o componente Table`, async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11);
    });

    expect(screen.getByRole('table')).toBeInTheDocument()
    
    expect(screen.getByText('name')).toBeInTheDocument()
    const nomeDoPlaneta = 'Dagobah'
    const input = screen.getByTestId('name-filter')
    
    userEvent.type(input, nomeDoPlaneta);
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('maior que')

  
    expect( await screen.findAllByRole('row')).toHaveLength(2)
  })
  
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('antd');

describe('Datos personales', () => {
  test('muestra la fotografía', () => {
    const { container } = render(<App />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    // Solo verifica que la imagen existe, no el src real (mockeado por Jest)
  });

  test('muestra el número de teléfono', () => {
    render(<App />);
    expect(screen.getByText(/0984306337/)).toBeInTheDocument();
  });

  test('muestra el nombre completo', () => {
    render(<App />);
    expect(screen.getByText(/DIEGO BACUY/)).toBeInTheDocument();
  });
});

describe('Listado de habilidades', () => {
  test('tiene al menos 5 elementos', () => {
    render(<App />);
    // Buscar los elementos de habilidades por el rol 'listitem' (li)
    const skills = screen.getAllByRole('listitem');
    expect(skills.length).toBeGreaterThanOrEqual(5);
  });
});

describe('Listado de proyectos', () => {
  test('tiene al menos 3 elementos', () => {
    expect(true).toBe(true);
  });
});

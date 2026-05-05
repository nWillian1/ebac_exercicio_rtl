import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComments', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Primeiro comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Segundo comentário de teste' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário de teste')).toBeInTheDocument();
    });
});
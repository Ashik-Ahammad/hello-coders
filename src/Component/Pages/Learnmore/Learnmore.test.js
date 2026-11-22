import React from 'react';
import { render } from '@testing-library/react';
import Learnmore from './Learnmore';

// Material UI v9 removed the legacy Grid item/xs props. This renders a real
// page that uses the grid and asserts the children are sized through the
// current size API instead of the removed item prop.
test('renders responsive grid items with the size API', () => {
    const { container } = render(<Learnmore />);

    const grid = container.querySelector('.MuiGrid-container');
    expect(grid).not.toBeNull();

    const items = Array.from(grid.children);
    expect(items).toHaveLength(2);

    items.forEach((item) => {
        expect(item).toHaveClass('MuiGrid-grid-xs-12');
        expect(item).toHaveClass('MuiGrid-grid-md-6');
        expect(item).not.toHaveClass('MuiGrid-item');
    });
});

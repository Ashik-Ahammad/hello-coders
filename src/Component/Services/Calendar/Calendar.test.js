import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Calendar from './Calendar';

// MUI's legacy static picker probes matchMedia while rendering, and jsdom does not
// implement it. The mock lets the pre-upgrade component render so the assertion
// below can prove the date is exposed as an editable date input.
beforeAll(() => {
    if (!window.matchMedia) {
        window.matchMedia = (query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        });
    }
});

test('exposes the appointment date as an editable date input', () => {
    const setDate = jest.fn();
    const { container } = render(
        <Calendar date={new Date(2026, 0, 15)} setDate={setDate} />
    );

    const input = container.querySelector('input[type="date"]');
    expect(input).not.toBeNull();
    expect(input.value).toBe('2026-01-15');

    fireEvent.change(input, { target: { value: '2026-02-20' } });

    expect(setDate).toHaveBeenCalledTimes(1);
    const picked = setDate.mock.calls[0][0];
    expect([picked.getFullYear(), picked.getMonth(), picked.getDate()]).toEqual([
        2026,
        1,
        20,
    ]);
});

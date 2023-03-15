import React from 'react';
import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import SearchBar from './SearchBar';

describe("SearchBar test", () => {    
    test("Should render component", ()=>{
        const wrapper = render(<SearchBar />)
        expect(wrapper).toBeTruthy()
    }),
    test("Should reder input placeholder", ()=>{
        const wrapper = render(<SearchBar />)
        const inp = wrapper.container.querySelector('input')
        expect(inp?.placeholder).toBe('ENTER_SEARCH_PARAMETER')
    }),
    test("Should show text SEARCH", () => {
        render(<SearchBar />);
        expect(screen.getByText(/SEARCH/i)).toBeDefined();
    })  
})
import React from 'react';
import {describe, test, expect, beforeEach, vi, afterAll} from 'vitest';
import {render, RenderResult, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar';

describe("SearchBar test", () => {    
    let wrapper: RenderResult;
    let onChangeInput = vi.fn();
    let input: HTMLInputElement;
    beforeEach(()=>{
        wrapper = render(<SearchBar />)
        input = screen.getByPlaceholderText('ENTER_SEARCH_PARAMETER');
    })
    test("Should render component", ()=>{        
        expect(wrapper).toBeTruthy()
    }),
    test("Should reder input placeholder", ()=>{
        const inp = wrapper.container.querySelector('input')
        expect(inp?.placeholder).toBe('ENTER_SEARCH_PARAMETER')
    }),
    test("Should show text SEARCH", () => {        
        expect(screen.getByText(/SEARCH/i)).toBeDefined();
    }),
    test("On change test", async ()=>{
        await userEvent.type(input, 'aasd');
        expect(input.value).toContain('aasd');
    }),
    afterAll(()=>{
        vi.clearAllMocks();
        vi.resetAllMocks();
    })

})
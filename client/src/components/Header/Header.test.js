import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });
  
    it('should toggle the header menu on clicking the menu icon', () => {
      expect(wrapper.state().showMenu).toEqual(false);
      wrapper.find('.openBtn').simulate('click');
      expect(wrapper.state().showMenu).toEqual(true);
    });
  
    it('should update search box value on input', () => {
      const input = wrapper.find('.input');
      input.simulate('change', { target: { value: 'Test Search' }});
      expect(input.prop('value')).toEqual('Test Search');
    });
  
  });
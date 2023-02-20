import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// test('renders learn react link', () => {
//     render(<Header />);
//     const linkElement = screen.getByText(/I'm header and I wish good luck everybody!/i);
//     expect(linkElement).toBeInTheDocument();
// });
describe('Header component', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });
  
    it('should render the header with the appropriate classnames', () => {
      expect(wrapper.find('.container')).toHaveLength(1);
      expect(wrapper.find('.header')).toHaveLength(1);
      expect(wrapper.find('.logo')).toHaveLength(1);
      expect(wrapper.find('.header_nav')).toHaveLength(1);
      expect(wrapper.find('.header_list')).toHaveLength(1);
      expect(wrapper.find('.input')).toHaveLength(1);
      expect(wrapper.find('.header_buttons')).toHaveLength(1);
    });
  
    it('should render the logo', () => {
      expect(wrapper.find('img')).toHaveLength(1);
    });
  
    it('should render the navigation menu items with appropriate classnames', () => {
      expect(wrapper.find('.header_list_item')).toHaveLength(4);
      expect(wrapper.find('.header_list_item_link').at(0).text()).toEqual('Catalog');
      expect(wrapper.find('.header_list_item_link').at(1).text()).toEqual('About');
      expect(wrapper.find('.header_list_item_link').at(2).text()).toEqual('Contact');
      expect(wrapper.find('.header_list_item_link').at(3).text()).toEqual('Blog');
    });
  
    it('should render the search box with appropriate classname', () => {
      expect(wrapper.find('.input')).toHaveLength(1);
    });
  
    it('should render the profile and favorite buttons with appropriate classnames', () => {
      expect(wrapper.find('.header_buttons_profile')).toHaveLength(1);
      expect(wrapper.find('.header_buttons_favorite')).toHaveLength(1);
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
  
    it('should simulate clicking the profile and favorite buttons', () => {
      const profileBtn = wrapper.find('.header_buttons_profile');
      const favoriteBtn = wrapper.find('.header_buttons_favorite');
      profileBtn.simulate('click');
      favoriteBtn.simulate('click');
      // add more expects as per your requirement
    });
  });
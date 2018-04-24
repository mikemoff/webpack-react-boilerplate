import MyComponent from '../js/components/my_component';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';


describe('MyComponent', () => {
  
  it('should be defined', () => {
    expect(MyComponent).toBeDefined();
  });

  it('should render a title', () => {
    const custom = 'Component Title';
    const comp = shallow(<MyComponent title={custom} />);
    expect(comp).toMatchSnapshot();
  });


});

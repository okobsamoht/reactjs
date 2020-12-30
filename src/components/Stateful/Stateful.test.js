import React from 'react';
import { shallow } from 'enzyme';
import Stateful from './Stateful';

describe('Stateful', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Stateful />);
    expect(wrapper).toMatchSnapshot();
  });
});

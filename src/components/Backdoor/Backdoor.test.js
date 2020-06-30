import React from 'react';
import { shallow } from 'enzyme';
import Backdoor from './Backdoor';

describe('<Backdoor />', () => {
  test('renders', () => {
    const wrapper = shallow(<Backdoor />);
    expect(wrapper).toMatchSnapshot();
  });
});

import { render } from 'enzyme';
import React from 'react';
import App from '../App';

describe('Patient Information Component', () => {
  test('should contain "Idea Board"', async () => {
    const wrapper = render(<App dispatch={jest.fn()} />);

    expect(wrapper.find('h1').text()).toEqual('Idea Board');
  });
});

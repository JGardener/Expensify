import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import expectExport from 'expect';

test("Should render the NotFoundPage component", () => {
    const wrapper = shallow(<NotFoundPage />);
    expectExport(wrapper).toMatchSnapshot();
} )
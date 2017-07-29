import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import Cruise from '../src/pages/cruise/components/index.js';
import { data as mockData } from '../src/pages/cruise/mods/mock';

describe('cruise', () => {
	describe('render', () => {
		it('should render cruise', () => {
			const wrapper = mount(<Cruise data={mockData} dispatch={() => {}} />);
			expect(wrapper.find('.body')).to.have.length(1);
		});

		it('should render list-item', () => {
			const wrapper = mount(<Cruise data={mockData} dispatch={() => {}} />);
			expect(wrapper.find('.list-item')).to.have.length(8);
		})
	});
})
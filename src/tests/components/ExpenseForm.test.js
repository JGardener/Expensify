import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expect } from "@jest/globals";
import expenses from '../fixtures/expenses' 

test("Should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test("Should render ExpenseForm with fixture data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test("Should render an error to the screen when the form is submitted without a description or amount", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on changes to input", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
     })
     expect(wrapper.state('description')).toBe(value);
});

test("Should set note on textarea change", () => {
    const value = "New note value";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
});

test("Should set amount if input is valid",() => {
    const value = "12.25";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    })
    expect(wrapper.state('amount')).toBe(value)
});

test("Should set amount if input is invalid",() => {
    const value = "12.252";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    })
    expect(wrapper.state('amount')).toBe("")
});
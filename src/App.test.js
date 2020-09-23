import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe("test elements", () =>{
  it("should find the div elemets ",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(3)
  })
  it("should find the input elemets ",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('input').length).toBe(1)
  })
  it("should find the input elemets ",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').length).toBe(1)
  })
})

describe("onChange function", () =>{
  // it("should find the div elemets ",()=>{
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('input').at(0)).simulate("change",{target: {name: "india"}})
  // })
})



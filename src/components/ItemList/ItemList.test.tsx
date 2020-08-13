import React from 'react'
import { mount } from 'enzyme'
import ItemList from '.'
import { Card } from 'antd'

describe('ItemList Unit testing..', () => {
  it('is truthy', () => {
    expect(ItemList).toBeTruthy()
  })

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("renders item data", async () => {
    const MenuData = {
      name: "pepsi",
      price: "300",
      description: "this is pepsi"
    };
    const wrapper = mount(<ItemList data={MenuData}/>)
    // Expect the wrapper object to be defined
    expect(wrapper.find(Card)).toBeDefined();
})
})

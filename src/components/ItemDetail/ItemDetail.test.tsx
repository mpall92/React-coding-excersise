import React from 'react'
import { mount } from 'enzyme'
import ItemDetail from '.'

describe('ItemDetail Unit testing..', () => {
  it('is truthy', () => {
    expect(ItemDetail).toBeTruthy()
  })

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("renders item data", async () => {
    const itemData = {
      name: "pepsi",
      price: "300",
      description: "this is pepsi"
    };
    const wrapper = mount(<ItemDetail data={itemData}/>)
    // Expect the wrapper object to be defined
    expect(wrapper.find('.item-detail')).toBeDefined();
})
})

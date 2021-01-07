import React from "react";
import { shallow } from "enzyme";
import { PastLinksComponent } from "../components/PastLinksComponent";

test("should test PastLinksComponent", () => {
    const wrapper = shallow(<PastLinksComponent/>);
    expect(wrapper).toMatchSnapshot();
});
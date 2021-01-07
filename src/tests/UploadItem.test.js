import React from "react";
import { shallow } from "enzyme";
import { UploadItem } from "../components/UploadItem";

const mediaTypes = ["image", "video", "audio", "pdf", "text", "zip", "upload"];

//fileName: string
//fileType: string
//downloadLink: string
//expireTime: optional string
test("should test all possible Upload Item components in progress", () => {
    mediaTypes.forEach((type) => {
        const wrapper = shallow(<UploadItem fileName="file name" fileType={ type } downloadLink=""/>);
        expect(wrapper).toMatchSnapshot();
    });
});

test("should test all possible Upload Item components finished", () => {
    mediaTypes.forEach((type) => {
        const wrapper = shallow(<UploadItem fileName="file name" fileType={ type } downloadLink="link"/>);
        expect(wrapper).toMatchSnapshot();
    });
});
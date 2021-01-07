import React from "react";
import { shallow } from "enzyme";
import { UploadItem } from "../components/UploadItem";

const mediaIcons = {
    image: "fas fa-file-image",
    video: "far fa-file-video",
    audio: "far fa-file-audio",
    pdf: "far fa-file-pdf",
    text: "far fa-file-alt",
    zip: "far fa-file-archive",
    upload: "fas fa-upload",
};

//fileName: string
//fileType: string
//downloadLink: string
//expireTime: optional string
test("should test all possible Upload Item components in progress", () => {
    for (const type in mediaIcons) {
        const wrapper = shallow(<UploadItem fileName="file name" fileType={type} downloadLink="" />);
        expect(wrapper.instance().displayMediaIcon()).toEqual(mediaIcons[type]);
        expect(wrapper).toMatchSnapshot();
    }
});

test("should test all possible Upload Item components finished", () => {
    for(const type in mediaIcons) {
        const wrapper = shallow(<UploadItem fileName="file name" fileType={type} downloadLink="link" />);
        expect(wrapper.instance().displayMediaIcon()).toEqual(mediaIcons[type]);
        expect(wrapper).toMatchSnapshot();
    }
});


test("should test all no file type Upload Item components", () => {
    const wrapper = shallow(<UploadItem fileName="file name" fileType="" downloadLink="link" />);
    expect(wrapper.instance().displayMediaIcon()).toEqual(mediaIcons.upload);
    expect(wrapper).toMatchSnapshot();
});
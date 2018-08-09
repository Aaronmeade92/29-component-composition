import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";

describe("Dashboard", () => {
  it("should render without crashing", () => {
    shallow(<Dashboard />);
  });

  it("should have form", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(NoteCreateForm)).toExist();
    expect(wrapper.find(NoteList)).toExist();
  });
});

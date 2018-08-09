import React from "react";
import { shallow } from "enzyme";
import NoteCreateForm from "./NoteCreateForm";
describe("NoteCreateForm", () => {
  it("should render", () => {
    shallow(<NoteCreateForm />);
  });

  it("should have initial state", () => {
    const wrapper = shallow(<NoteCreateForm />);
    expect(wrapper).toHaveState({
      title: "",
      content: "",
      editing: false,
      completed: false
    });
  });

  it("should handle form changes", () => {
    const wrapper = shallow(<NoteCreateForm />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "title",
        value: "new title",
        type: "text"
      }
    };
    instance.onChange(event);

    expect(wrapper.state("title")).toBe("new title");
  });

  it("should submit a new note", done => {
    const onSubmit = note => {
      expect(note.id).not.toBe("");
      done();
    };
    const wrapper = shallow(<NoteCreateForm onSubmit={onSubmit} />);

    // notice that we pass in stub function for preventDefault
    const event = {
      preventDefault: () => {}
    };

    wrapper.instance().onSubmit(event);
  });
});

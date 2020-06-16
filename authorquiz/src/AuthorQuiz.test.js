import React from "react";
import ReactDOM from "react-dom";
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ["The shining"],
    author: {
      name: "Charles Dickens",
      imageUrl: "images/authors/charlesdickens.jpg",
      imageSource: "WikiSource",
      books: ["David Coperfield", "A tale of two cities"],
    },
  },
  highlight: "none",
};

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });
});

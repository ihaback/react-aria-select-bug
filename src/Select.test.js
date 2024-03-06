import TestRenderer from "react-test-renderer";
import { AriaSelect } from "./Select";
import ReactDOM from "react-dom";

describe("Select", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("generating snapshot for Select", () => {
    const testRenderer = TestRenderer.create(<AriaSelect />);

    expect(testRenderer).toMatchSnapshot();
  });
});

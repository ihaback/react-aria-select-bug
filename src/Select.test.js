import TestRenderer from "react-test-renderer";
import { AriaSelect } from "./Select";

test("generating snapshot for Select", () => {
  const testRenderer = TestRenderer.create(<AriaSelect />);

  expect(testRenderer).toMatchSnapshot();
});


import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the app", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

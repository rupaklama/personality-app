import { render, screen } from "@testing-library/react";

import { axe } from "jest-axe";

import App from "./App";

describe("App component", () => {
  describe("layout", () => {
    it("should display a header", () => {
      render(<App />);

      const headerText = screen.getByText("Find Your Personality");
      expect(headerText).toBeInTheDocument();
    });

    it("should display a footer", () => {
      render(<App />);

      const footerText = screen.getByText("© Developed by Rupak Lama");
      expect(footerText).toBeInTheDocument();
    });

    describe("accessibility", () => {
      it("should pass accessibility test", async () => {
        const { container } = render(<App />);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });
});

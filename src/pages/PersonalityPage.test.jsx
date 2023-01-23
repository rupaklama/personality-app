import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { axe } from "jest-axe";
import PersonalityPage from "./PersonalityPage";

describe("PersonalityPage component", () => {
  describe("layout", () => {
    it("should display a Header", () => {
      render(<PersonalityPage />);

      const headerEl = screen.getByRole("heading", { name: /are you an introvert or an extrovert/i });
      expect(headerEl).toBeInTheDocument();
    });

    it("should display a Cards", () => {
      render(<PersonalityPage />);

      const cards = screen.getAllByRole("article");
      expect(cards).toHaveLength(5);
    });

    it("should display a See Results button", () => {
      render(<PersonalityPage />);

      const buttonEl = screen.getByRole("button", { name: /see results/i });
      expect(buttonEl).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("should pass accessibility test", async () => {
      const { container } = render(<PersonalityPage />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("interactions", () => {
    it("should display 'Introvert' on button clicks", () => {
      render(<PersonalityPage />);

      const yesBtns = screen.getAllByRole("button", { name: "Yes" });

      yesBtns.forEach(btn => {
        userEvent.click(btn);
      });

      const seeResultsBtn = screen.getByRole("button", { name: "See Results" });
      userEvent.click(seeResultsBtn);

      const textEl = screen.getByText("Introvert");
      expect(textEl).toBeInTheDocument();
    });

    it("should display 'Extrovert' on button clicks", () => {
      render(<PersonalityPage />);

      const noBtns = screen.getAllByRole("button", { name: "No" });

      noBtns.forEach(btn => {
        userEvent.click(btn);
      });

      const seeResultsBtn = screen.getByRole("button", { name: "See Results" });
      userEvent.click(seeResultsBtn);

      const textEl = screen.getByText("Extrovert");
      expect(textEl).toBeInTheDocument();
    });

    it("should display default message on 'See Results' button click", () => {
      render(<PersonalityPage />);

      const seeResultsBtn = screen.getByRole("button", { name: "See Results" });
      userEvent.click(seeResultsBtn);

      const textEl = screen.getByText(/one more question/i);
      expect(textEl).toBeInTheDocument();
    });
  });
});

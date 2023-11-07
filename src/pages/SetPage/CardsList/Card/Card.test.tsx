import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Card from "./Card";

const card = {
  id: "1",
  name: "s",
  number: "1",
  scryfallId: "card_example.jpg",
};

describe("given a card", () => {
  test("its infos are displayed", () => {
    render(<Card card={card} />, { wrapper: RecoilRoot });

    const name = screen.getByText(card.name);
    const collectCheckbox = screen.getByRole("checkbox");

    expect(name).toBeInTheDocument();
    expect(collectCheckbox).toBeInTheDocument();
  });
});

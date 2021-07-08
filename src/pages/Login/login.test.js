import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./";

describe("When everything is ok.", () => {
    test("Display error when clicking login with empty fields", () => {
        render(<Login />);

        //userEvent.type(screen.queryByLabelText("Digite seu e-mail.")," ");

        //userEvent.click(screen.getByTestId("login"));

        const fromScreen = screen.getAllByText("Login");

        expect(fromScreen).toBeInTheDocument();
    })
})git
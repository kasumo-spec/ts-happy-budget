import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import Login from "./";

const mockSubmit = jest.fn();

jest.mock("react-hook-form", () => {
    return {
        useForm: () => ({
            handleSubmit: mockSubmit, 
            register: jest.fn(),
            formState: { errors: {} }
        })
    }
});

describe("When everything is ok.", () => {
    test("Submit the login successfully", () => {
        render(<Login />);

        const inputEmail = screen.getByTestId("email");

        const inputPassword = screen.getByTestId("password");

        const inputForm = screen.getByTestId("form");

        userEvent.type(inputEmail, "borracha@mail.com");

        userEvent.type(inputPassword, "123456");

        fireEvent.submit(inputForm);

        expect(mockSubmit).toHaveBeenCalled()

    })
})
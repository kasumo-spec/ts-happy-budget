import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import SignUp from "./";

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
    test("Submit the registration successfully", () => {
        render(<SignUp />);

        const inputName = screen.getByTestId("name");

        const inputEmail = screen.getByTestId("email");

        const inputPassword = screen.getByTestId("password");

        const inputPasswordChecked = screen.getByTestId("passwordChecked");

        const inputForm = screen.getByTestId("form");

        userEvent.type(inputName, "borracha");
        userEvent.type(inputEmail, "borracha@mail.com");
        userEvent.type(inputPassword, "123456");
        userEvent.type(inputPasswordChecked, "123456");

        fireEvent.submit(inputForm);

        expect(mockSubmit).toHaveBeenCalled()

    })
})
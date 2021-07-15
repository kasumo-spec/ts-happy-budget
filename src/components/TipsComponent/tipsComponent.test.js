import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TipsComponent from "./index";

describe("When everything is ok.", () =>{
    test("when the user clicks a button tipsOne it should render the article", ()=> {
        render(<TipsComponent />);

        userEvent.click(screen.getByTestId("tipsOne"));

        const fromScreen = screen.getByText("O que é educação finaceira?");

        expect(fromScreen).toBeInTheDocument();
    });

    test("when the user clicks a button tipsTwo it should render the article", ()=> {
        render(<TipsComponent />);

        userEvent.click(screen.getByTestId("tipsTwo"));

        const fromScreen = screen.getByText("O que é a reserva de emergência?");

        expect(fromScreen).toBeInTheDocument();
    });

    test("when the user clicks a button tipsTree it should render the article", ()=> {
        render(<TipsComponent />);

        userEvent.click(screen.getByTestId("tipsTree"));

        const fromScreen = screen.getByText("Utilize programas de recompensa e seguros do cartão");

        expect(fromScreen).toBeInTheDocument();
    });

    test("when the user clicks a button tipsFour it should render the article", ()=> {
        render(<TipsComponent />);

        userEvent.click(screen.getByTestId("tipsFour"));

        const fromScreen = screen.getByText("Aproveitar o 13º salário com sabedoria.");

        expect(fromScreen).toBeInTheDocument();
    });

})
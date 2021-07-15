import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BudgetDeleteModal from "./index"

describe("Working good", () => {
    test("Should render new budget modal when button is clicked", async () => {
        render(<BudgetDeleteModal/>)

        userEvent.click(screen.getByTestId("delete"))

        const message = screen.getByText("Tem certeza que quer deletar o seu Orçamento Atual?")

        expect(message).toBeInTheDocument()
    })
})
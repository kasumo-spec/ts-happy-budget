import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NewExpenseModal from "./index"

describe("Working good", () => {
    test("Should render new budget modal when button is clicked", async () => {
        render(<NewExpenseModal/>)

        userEvent.click(screen.getByText("Criar"))

        const modal = screen.getByText("O quanto você planeja gastar com:")

        expect(modal).toBeInTheDocument()
    })
})
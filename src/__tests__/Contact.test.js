import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"

describe("Contact Us Page Test Cases", () => {
    test("Should load 2 Input boxes", () => {
        render(<Contact />)
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox")
    
        // Assertion
        expect(inputBoxes.length).toBe(2)
    })

    it("Should load Contact us Component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    it("Should contain button in component", () => {
        render(<Contact />)

        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })
})

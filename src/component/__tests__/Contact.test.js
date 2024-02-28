import { render , screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from '../header/Contact'

  test("should load all input box",()=>{
    render(<Contact/>)
    const input = screen.getAllByRole("textbox");
    console.log(input)
    expect(input.length).toBe(2);
  })

  test("should load input as id ",()=>{
    render(<Contact/>)
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  })
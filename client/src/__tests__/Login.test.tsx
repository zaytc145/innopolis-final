import {render, screen} from "@testing-library/react";
import Login from "../pages/Login";

test('login form is displayed', async () => {
    render(<Login/>)

    expect(await screen.getByRole('input', {name: "email"})).toBeInTheDocument()
    expect(await screen.getByRole('input', {name: "password"})).toBeInTheDocument()
})

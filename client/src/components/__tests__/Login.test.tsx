import {render, screen} from "@testing-library/react";
import Login from "../../pages/Login.tsx";
import {expect, test} from "vitest";

test('login form is displayed', async () => {
    render(<Login/>)

    expect(await screen.getByRole('input', {name: "email"})).toBeInTheDocument()
    expect(await screen.getByRole('input', {name: "password"})).toBeInTheDocument()
})

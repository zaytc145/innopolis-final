import Login from "../../pages/Login.tsx";
import {expect, test} from "vitest";
import {render, screen} from "../../test-utils.tsx";

test('login form is displayed', async () => {
    render(<Login/>)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", {})).toBeInTheDocument()
})

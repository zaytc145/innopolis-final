import Login from "../Login.tsx";
import {expect, test} from "vitest";
import {render, screen} from "../../test-utils.tsx";
import {fireEvent} from "@testing-library/react";

test('login form is displayed', async () => {
    render(<Login/>)

    expect(await screen.getByLabelText("Email")).toBeInTheDocument()
    expect(await screen.getByLabelText("Password")).toBeInTheDocument()
    expect(await screen.getByRole("button")).toBeInTheDocument()
})

test('typing is working', async () => {
    render(<Login/>)
    const emailInputNode = screen.getByLabelText("Email");
    const passwordInputNode = screen.getByLabelText("Password");

    fireEvent.change(emailInputNode, { target: {value: "test@test.ru" }});
    expect(emailInputNode.value).toMatch("test@test.ru");

    fireEvent.change(passwordInputNode, { target: {value: "test" }});
    expect(emailInputNode.value).toMatch("test");

})

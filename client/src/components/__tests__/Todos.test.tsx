import {expect, test} from "vitest";
import {render, screen} from "../../test-utils.tsx";
import Todos from "../../pages/Todos.tsx";

test('todos are rendered', async () => {
    render(<Todos/>)

    expect(screen.getByLabelText("test")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", {})).toBeInTheDocument()
})

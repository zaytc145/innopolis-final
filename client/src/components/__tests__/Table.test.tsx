import {expect, test} from "vitest";
import Table from "../Table.tsx";
import {render, screen} from "@testing-library/react";

test('table is rendered', async () => {
    render(<Table/>)

    expect(await screen.getByRole("table")).toBeInTheDocument()
})

test('table children are rendered', async () => {
    render(<Table>
            <tbody>
            <tr>
                <th>1</th>
            </tr>
            <tr>
                <th>1</th>
            </tr>
            </tbody>
        </Table>
    )

    expect(await screen.getAllByRole("row")).toHaveLength(2)
})

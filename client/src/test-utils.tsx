import {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import AuthProvider from "./providers/AuthProvider.tsx";
import MainRoutes from "./routes/MainRoutes.tsx";

const AllTheProviders = () => {
    return (
        <AuthProvider>
            <MainRoutes></MainRoutes>
        </AuthProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}

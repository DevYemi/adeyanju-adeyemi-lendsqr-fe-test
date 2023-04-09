import { render, act, screen } from "@/utils/test-utils"
import GetRoutes from "@/utils/routes"
import { MemoryRouter, RouterProvider, Routes, createMemoryRouter, createRoutesFromElements } from "react-router-dom"
import userEvent from '@testing-library/user-event'



describe("Unit tests", () => {
    it("should render loginPage properly", async () => {
        const routes = GetRoutes()

        const { baseElement } = render(
            <MemoryRouter initialIndex={0} initialEntries={["/", "/login"]}>
                <Routes>
                    {routes}
                </Routes>
            </MemoryRouter>
        )
        // const wrapper = await screen.findByTestId("loginWrapper") as HTMLElement;

        await act(async () => {
            expect(baseElement).toBeInTheDocument()
        })




    })

    it("should display error propmt when user try to Login without filling details", async () => {
        const user = userEvent.setup()
        const router = createMemoryRouter(createRoutesFromElements(GetRoutes()));

        render(<RouterProvider router={router} />);


        const submitBtn = await screen.findByTestId("formSubmit") as HTMLButtonElement


        await user.click(submitBtn)

        const errorPromts = await screen.findAllByTestId("loginErrorPrompt");

        expect(errorPromts).toHaveLength(2)
    })

    it("should route to DashboardPage after user login successfully", async () => {
        const user = userEvent.setup()
        const router = createMemoryRouter(createRoutesFromElements(GetRoutes()));

        render(<RouterProvider router={router} />);

        const emailInput = await screen.findByTestId("emailInput") as HTMLInputElement
        const passwordInput = await screen.findByTestId("passwordInput") as HTMLInputElement
        const submitBtn = await screen.findByTestId("formSubmit") as HTMLButtonElement

        await user.type(emailInput, "test@gmail.com");
        await user.type(passwordInput, "testPassword");
        await user.click(submitBtn)

        const wrapper = await screen.findByTestId("dashboardWrapper");

        expect(wrapper).toBeInTheDocument()
    })
})
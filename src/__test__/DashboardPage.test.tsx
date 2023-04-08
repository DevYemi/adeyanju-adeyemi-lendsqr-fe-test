import { render, screen } from "@/utils/test-utils"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import Dashboard from "@/pages/DashboardPage"


describe("Unit tests", () => {
    it("should render Dashboard properly", async () => {

        const routes = [
            {
                path: "/",
                element: <Dashboard />,
            },
        ];
        const router = createMemoryRouter(routes);

        render(<RouterProvider router={router} />);


        const wrapper = await screen.findByTestId("dashboardWrapper")


        expect(wrapper).toBeInTheDocument()



    })
})
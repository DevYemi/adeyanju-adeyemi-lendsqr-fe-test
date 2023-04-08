import UsersPage from "@/pages/UsersPage"
import { render, screen } from "@/utils/test-utils"
import { RouterProvider, createMemoryRouter } from "react-router-dom"


describe("Unit tests", () => {
    it("should render UserPage properly", async () => {

        const routes = [
            {
                path: "/users",
                element: <UsersPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/users"],
            initialIndex: 1
        });

        render(<RouterProvider router={router} />);


        const wrapper = await screen.findByTestId("usersPageWrapper");

        expect(wrapper).toBeInTheDocument()



    })
    it("should have 2 users in the table", async () => {

        const routes = [
            {
                path: "/users",
                element: <UsersPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/users"],
            initialIndex: 1
        });

        render(<RouterProvider router={router} />);


        const tableRowContent = await screen.findAllByTestId("tableRowContent");

        expect(tableRowContent).toHaveLength(2);



    })
})
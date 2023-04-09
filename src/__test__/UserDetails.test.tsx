
import UserDetailsPage from "@/pages/UserDetailsPage";
import UsersPage from "@/pages/UsersPage";
import { render, screen } from "@/utils/test-utils"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'


describe("Unit tests", () => {
    it("should re-route user to usersPage if there is no data in localstorage", async () => {

        const routes = [
            {
                path: "/users/1",
                element: <UserDetailsPage />,
            },
            {
                path: "/users",
                element: <UsersPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/users", "/users/1"],
            initialIndex: 2
        });

        render(<RouterProvider router={router} />);


        const wrapper = await screen.findByTestId("usersPageWrapper");
        // const wrapper = await screen.findByTestId("userDetailsPageWrapper");

        expect(wrapper).toBeInTheDocument()



    })
    it("should renders when there is data in localstorage", async () => {
        const user = userEvent.setup()
        const routes = [
            {
                path: "/users/1",
                element: <UserDetailsPage />,
            },
            {
                path: "/users",
                element: <UsersPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/users", "/users/1"],
            initialIndex: 1
        });

        const { baseElement } = render(<RouterProvider router={router} />);

        await user.click(await screen.findByText(/test1@gmail.com/));


        expect(baseElement).toBeInTheDocument()





    })
})
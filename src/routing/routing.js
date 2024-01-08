import { Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "../hoc/layout/layout";
import Home from "../pages/home/home";
import Authenticate from "../pages/authenticate/authenticate";
// import Home from "../pages/home/Home";
// import Authenticate from "../pages/authenticate/authenticate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: (
          <div>
            catalog<Outlet></Outlet>
          </div>
        ),
        children: [
          {
            path: ":categoryId",
            element: (
              <div>
                Category page <Outlet></Outlet>
              </div>
            ),
            children: [{ path: ":itemId", element: <div>Item page</div> }],
          },
        ],
      },
      {
        path: "cart",
        element: <div>CART</div>,
      },
      {
        path: "about-us",
        element: <div>About Us</div>,
      },
      {
        path: "contact-us",
        element: <div>Contact Us</div>,
      },
      {
        path: "/profile",
        element: <div>profile</div>,
      },
    ],
  },
  {
    path: "/authentication/:type",
    element: <Authenticate />,
  },
  {
    path: "*",
    element: <div>page not found</div>,
  },
]);

export default router;

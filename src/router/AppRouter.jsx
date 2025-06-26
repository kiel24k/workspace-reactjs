import { createBrowserRouter } from "react-router-dom";
import IndexLayout from "../layouts/indexLayout";
import Home from "../pages/User/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        
      }
    ],
  },
]);

export default routes;

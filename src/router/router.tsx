import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateOrder from "@/pages/CreateOrder";
import Orders from "@/pages/Orders";
import Invoice from "@/pages/Invoice";


const Router = () => {
    const config = createBrowserRouter(
      [
        
        {
          path: "/create-order",
          element: <CreateOrder />,
        },
        {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/invoice/:invoice_id",
            element: <Invoice />,
          },
          
      ],
    //   {
    //     future: {
      
    //       v7_fetcherPersist: true,
    //       v7_normalizeFormMethod: true,
    //       v7_partialHydration: true,
    //       v7_relativeSplatPath: true,
    //       v7_skipActionStatusRevalidation: true,
    //       v7_skipActionErrorRevalidation: true,
    //     },
    //   }
    );

    return <RouterProvider router={config} />
};

export default Router;
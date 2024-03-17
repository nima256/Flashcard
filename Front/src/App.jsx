import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Collections from "./Collections/Collections";
import collectionLoader from "./Loaders/collectionLoader";
import CreateCollection from "./Collections/CreateCollection";
import EditCollection from "./Collections/EditCollection";
import DeleteCollection from "./Collections/DeleteCollection";
import BuyPermium from "./Permium/BuyPermium";
import HeaderAndFooter from "./Others/HeaderAndFooter";
import Error from "./Others/Error";
import OneCollection from "./Collections/OneCollection";
import oneCollectionLoader from "./Loaders/oneCollectionLoader";

const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/collection",
        element: <Collections />,
        loader: collectionLoader,
        errorElement: <Error />,
      },
      {
        path: "/collection/:collectionId",
        element: <OneCollection />,
        loader: oneCollectionLoader,
        errorElement: <Error />,
      },
      {
        path: "/create-collection",
        element: <CreateCollection />,
      },
      {
        path: "/edit-collection/:collectionId",
        element: <EditCollection />,
      },
      {
        path: "/delete-collection/:collectionId",
        element: <DeleteCollection />,
      },
      {
        path: "/buy-permium",
        element: <BuyPermium />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

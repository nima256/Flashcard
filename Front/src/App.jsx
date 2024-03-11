import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Flashcards from "./Flashcard/Flashcards";
import CreateFlashcard from "./Flashcard/CreateFlashcard";
import EditFlashcard from "./Flashcard/EditFlashcard";
import DeleteFlashcard from "./Flashcard/DeleteFlashcard";
import BuyPermium from "./Permium/BuyPermium";
import HeaderAndFooter from "./HeaderFooter/HeaderAndFooter";

const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
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
        path: "/flashcards",
        element: <Flashcards />,
      },
      {
        path: "/create-flashcard",
        element: <CreateFlashcard />,
      },
      {
        path: "/edit-flashcard/:flashcardId",
        element: <EditFlashcard />,
      },
      {
        path: "/delete-flashcard/:flashcardId",
        element: <DeleteFlashcard />,
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

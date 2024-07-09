import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import College from "./pages/College";
import Event from "./pages/Event";
import CreateEvent from "./pages/CreateEvent";
import Landing from "./pages/Landing";
import NotFound404 from "./pages/NotFound404";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/College", element: <College /> },
    { path: "/CreateEvent", element: <CreateEvent /> },
    { path: "/Event", element: <Event /> },
    { path: "/NotFound404", element: <NotFound404 /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/SignUp", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/about/About";
import WebProjectDetail from "../pages/projects/WebProjectDetail";
import ArtProjectDetail from "../pages/projects/ArtProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element:<Home/>},
      {path: "about", element: <About />},
      {path: "project/web/:id", element: <WebProjectDetail/>},
      {path: "project/art/:id", element: <ArtProjectDetail/>}
    ]
  }
])
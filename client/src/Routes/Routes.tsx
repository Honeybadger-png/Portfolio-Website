import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element:<Home/>},
      {path: "about", element: <About />},
      {path: "projects", element:  <Projects /> }

    ]
  }
])
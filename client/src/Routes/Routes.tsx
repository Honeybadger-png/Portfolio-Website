import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/projects/Projects";
import Construction from "../pages/construction/Construction";
import About from "../pages/about/About";

const {APP_STATUS} = process.env

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element: APP_STATUS === "development" ? <Home/> : <Construction/> },
      {path: "about", element: <About />},
      {path: "projects", element:  <Projects /> }

    ]
  }
])
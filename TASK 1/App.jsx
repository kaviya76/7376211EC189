import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Layout from "./Layout"
import Register from "./Components/Register"

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/Home",element: <Home /> },
                { path: "/About",element: <About /> },
                { path: "/Contact",element: <Contact /> },
                { path: "/Register",element: <Register /> }
            ]
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/Contact",
            element: <Contact />
        }
    
    ])

    return (
        <RouterProvider router={router} />
    
    )
}

export default App 
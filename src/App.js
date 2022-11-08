import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

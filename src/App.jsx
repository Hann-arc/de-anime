import router from "./route/index";
import { RouterProvider } from "react-router-dom";

function App() {


  return (
    <>
    <div className="bg-black text-white">
    <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;

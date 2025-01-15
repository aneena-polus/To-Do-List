import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import ToDoApp from "./Components/ToDoApp";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import UserProfile from "./Components/UserProfile";
import ErrorMsg from "./Components/ErrorMsg";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/todoapp" element={<><Navbar /><ToDoApp /></>} />
                <Route path="/userprofile" element={<><Navbar /><UserProfile /></>} />
                <Route path="/errorMsg" element={<ErrorMsg />} />
            </Routes>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                draggable
                theme="dark"
            />
        </div>
    );
}

export default App;

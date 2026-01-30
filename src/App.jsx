import { BrowserRouter, Route, Routes } from "react-router";
import { EmailVerify } from "./pages/EmailVerify/EmailVerify";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/LoginPage";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";

import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/email-verify" element={<EmailVerify />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

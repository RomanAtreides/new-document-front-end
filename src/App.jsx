import { BrowserRouter, Route, Routes } from "react-router";
import { EmailFerify } from "./pages/EmailVerify/EmailVerity";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/LoginPage";
import { ResetPasswor } from "./pages/ResetPassword/ResetPassword";

import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/email-verify" element={<EmailFerify />} />
                    <Route path="/reset-password" element={<ResetPasswor />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

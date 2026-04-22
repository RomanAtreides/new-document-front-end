import {BrowserRouter, Route, Routes} from "react-router";
import {ToastContainer} from "react-toastify";

import {EmailVerify} from "./pages/EmailVerify/EmailVerity";
import {Home} from "./pages/Home/HomePage";
import {Login} from "./pages/Login/LoginPage";
import {Report} from "./pages/Report/ReportPage";
import {ResetPassword} from "./pages/ResetPassword/ResetPassword";
import {ReportTest} from "./pages/ReportTest/ReportTest";

function App() {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<ReportTest/>}/>
                    <Route path="/report" element={<Report/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/email-verify" element={<EmailVerify/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

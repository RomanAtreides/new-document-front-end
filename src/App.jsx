import { BrowserRouter, Route, Routes } from 'react-router';
import { Main } from './pages/Main/MainPage';
import { Login } from './pages/Login/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

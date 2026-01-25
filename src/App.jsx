import { BrowserRouter, Route, Routes } from 'react-router';
import { Main } from './pages/Main/MainPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

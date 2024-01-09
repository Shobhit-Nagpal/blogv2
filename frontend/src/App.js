import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogEditPage from './pages/BlogEditPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/post/:id" element={<BlogDetailPage />}/>
        <Route path="/post/edit/:id" element={<BlogEditPage />}/>
        <Route path="/login" element={<AdminLoginPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        </BrowserRouter>
    )
}


export default App;

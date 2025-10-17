// src/front/App.jsx
import React, { useState } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import DirectorProfilePage from './pages/DirectorProfilePage';

// Если у тебя ещё нет этих заглушек — создай простые компоненты в ./pages/
// или импортируй свои реальные страницы, когда будут готовы:
import CreatePlanPage from './pages/CreatePlanPage';
import RegisterEmployeePage from './pages/RegisterEmployeePage';
import OrdersPage from './pages/OrdersPage';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleNavigate = (page) => {
        // общий навигатор — используется в Header и в кнопках страниц
        setCurrentPage(page);
    };

    const handleLogin = (userData) => {
        // onLogin ожидает объект userData с полем role: 'director' | 'user' | ...
        setUser(userData);
        setIsAuthenticated(true);

        // если директор — открываем страницу директора, иначе профиль
        if (userData && userData.role === 'director') {
            setCurrentPage('director');
        } else {
            setCurrentPage('profile');
        }
    };

    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setCurrentPage('home');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;

            case 'login':
                // LoginPage должен вызывать onLogin(userData) при успешном вводе
                return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;

            case 'profile':
                return (
                    <ProfilePage
                        user={user || {}}
                        onNavigate={handleNavigate}
                        onLogout={handleLogout}
                    />
                );

            case 'director':
                return (
                    <DirectorProfilePage
                        user={user || {}}
                        onNavigate={handleNavigate}
                        onLogout={handleLogout}
                    />
                );

            case 'createPlan':
            case 'create-plan':
                return <CreatePlanPage user={user} onNavigate={handleNavigate} />;

            case 'registerEmployee':
            case 'register-employee':
                return <RegisterEmployeePage onNavigate={handleNavigate} />;

            case 'orders':
                return <OrdersPage user={user} onNavigate={handleNavigate} />;

            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return renderPage();
}

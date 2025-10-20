import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 🧱 Страницы
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import DirectorProfilePage from './pages/DirectorProfilePage';
import CreatePlanPage from './pages/CreatePlanPage';
import RegisterEmployeePage from './pages/RegisterEmployeePage';
import OrdersPage from './pages/OrdersPage';
import OrderApprovalPage from './pages/OrderApprovalPage';
import OrderCompletionPage from './pages/OrderCompletionPage';

export default function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (formData) => {
        // 🔹 Пример фейковой авторизации (заменим при подключении бэкенда)
        const mockUser = {
            username: formData.username,
            email: formData.email,
            role: formData.username === 'director' ? 'director' : 'user',
        };
        setUser(mockUser);
    };

    const handleLogout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <Router>
            <Routes>
                {/* Главная */}
                <Route path="/" element={<HomePage />} />

                {/* Авторизация */}
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to={user.role === 'director' ? '/director' : '/profile'} />
                        ) : (
                            <LoginPage onLogin={handleLogin} />
                        )
                    }
                />

                {/* Профиль обычного пользователя */}
                <Route
                    path="/profile"
                    element={
                        isAuthenticated ? (
                            user.role === 'director' ? (
                                <Navigate to="/director" />
                            ) : (
                                <ProfilePage user={user} />
                            )
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Профиль директора */}
                <Route
                    path="/director"
                    element={
                        isAuthenticated ? (
                            user.role === 'director' ? (
                                <DirectorProfilePage user={user} />
                            ) : (
                                <Navigate to="/profile" />
                            )
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Создание производственного плана */}
                <Route
                    path="/create-plan"
                    element={
                        isAuthenticated ? (
                            <CreatePlanPage user={user} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Регистрация сотрудника */}
                <Route
                    path="/register-employee"
                    element={
                    <RegisterEmployeePage />}
                />

                {/* Заказы */}
                <Route
                    path="/orders"
                    element={
                        isAuthenticated ? (
                            <OrdersPage user={user} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Утверждение заказа директором */}
                <Route
                    path="/order-approval/:orderId"
                    element={
                        isAuthenticated && user.role === 'director' ? (
                            <OrderApprovalPage user={user} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Отметка выполнения заказа пользователем */}
                <Route
                    path="/order-completion/:orderId"
                    element={
                        isAuthenticated ? (
                            <OrderCompletionPage user={user} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Заглушка на неизвестные маршруты */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

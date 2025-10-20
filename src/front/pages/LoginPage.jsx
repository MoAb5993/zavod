import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory } from 'lucide-react';
import styles from '../styles/LoginPage.module.css';

export default function LoginPage({ onLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('🔹 Данные для входа:', formData);

        // TODO: Реализовать реальный запрос к бэкенду:
        /*
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('isAuthenticated', 'true');
                onLogin(data.user);
                navigate(data.user.role === 'director' ? '/director' : '/profile');
            } else {
                alert('Неверные данные для входа');
            }
        })
        .catch(err => console.error(err));
        */

        // 🔹 Временная заглушка (пока нет бэкенда)
        const fakeUser = {
            name: formData.username,
            email: formData.email,
            role: formData.username.toLowerCase().includes('dir') ? 'director' : 'user',
        };

        // Сохраняем "авторизацию" в localStorage
        localStorage.setItem('user', JSON.stringify(fakeUser));
        localStorage.setItem('isAuthenticated', 'true');

        if (onLogin) onLogin(fakeUser);

        // 🔹 Переход по роли
        navigate(fakeUser.role === 'director' ? '/director' : '/profile');
    };

    return (
        <div className={styles.page}>
            <div className={styles.formContainer}>
                <div className={styles.logo}>
                    <Factory size={36} color="#333" />
                    <h1 className={styles.logoText}>Zavod.ru</h1>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Логин"
                        value={formData.username}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

                    <button type="submit" className={styles.button}>
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}

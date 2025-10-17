import React, { useState } from 'react';
import { Factory } from 'lucide-react'; // ✅ импортируем иконку завода
import styles from '../styles/LoginPage.module.css';

export default function LoginPage({ onLogin, onNavigate }) {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные для входа:', formData);
        if (onLogin) onLogin(formData);
    };

    return (
        <div className={styles.page}>
            <div className={styles.formContainer}>
                <div className={styles.logo}>
                    <Factory size={36} color="#333" /> {/* ✅ иконка завода */}
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
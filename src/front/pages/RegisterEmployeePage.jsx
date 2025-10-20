import React, { useState } from 'react';
import { Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/RegisterEmployeePage.module.css';

export default function RegisterEmployeePage() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        birthDate: '',
        position: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: интеграция с бэкендом
        // Пример:
        // fetch('/api/employees/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // }).then(res => res.json()).then(data => {
        //     console.log('Employee registered:', data);
        // });

        console.log('Отправлено:', formData);
        navigate('/profile'); // после регистрации вернуться в профиль
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
                    <input
                        type="date"
                        name="birthDate"
                        placeholder="Дата рождения"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Должность"
                        value={formData.position}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

                    <button type="submit" className={styles.button}>
                        Создать профиль
                    </button>
                </form>
            </div>
        </div>
    );
}

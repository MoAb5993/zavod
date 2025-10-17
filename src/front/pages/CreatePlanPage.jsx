import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/CreatePlanPage.module.css';

export default function CreatePlanPage({ onNavigate, onLogout }) {
    const [formData, setFormData] = useState({
        companyName: '',
        orderName: '',
        workshop: '',
        executor: ''
    });

    // Данные для выпадающих списков (будут получаться с бэкенда)
    const [workshops, setWorkshops] = useState([]);
    const [executors, setExecutors] = useState([]);
    const [loading, setLoading] = useState(false);

    // Загрузка данных для селектов (заглушка - заменить на реальный API)
    useEffect(() => {
        // Временные данные для примера
        setWorkshops([
            { id: 1, name: 'Цех №1' },
            { id: 2, name: 'Цех №2' },
            { id: 3, name: 'Цех №3' },
            { id: 4, name: 'Цех №4' }
        ]);

        setExecutors([
            { id: 1, name: 'Исполнитель 1' },
            { id: 2, name: 'Исполнитель 2' },
            { id: 3, name: 'Исполнитель 3' },
            { id: 4, name: 'Исполнитель 4' }
        ]);

        // TODO: Заменить на реальный запрос к API
        // fetch('/api/workshops')
        //   .then(res => res.json())
        //   .then(data => setWorkshops(data));
        // fetch('/api/executors')
        //   .then(res => res.json())
        //   .then(data => setExecutors(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Заменить на реальный запрос к API
            console.log('Отправка плана на утверждение:', formData);

            // Пример запроса:
            // const response = await fetch('/api/plans/create', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // });
            // const result = await response.json();

            // Имитация задержки
            await new Promise(resolve => setTimeout(resolve, 1000));

            alert('План успешно отправлен на утверждение!');

            // Очистка формы
            setFormData({
                companyName: '',
                orderName: '',
                workshop: '',
                executor: ''
            });

        } catch (error) {
            console.error('Ошибка при отправке плана:', error);
            alert('Ошибка при отправке плана');
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = () => {
        return formData.companyName.trim() !== '' &&
            formData.orderName.trim() !== '' &&
            formData.workshop !== '' &&
            formData.executor !== '';
    };

    return (
        <div className={styles.page}>
            <Header
                isAuthenticated={true}
                onLogout={onLogout}
                onNavigate={onNavigate}
            />

            <main className={styles.main}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Заказ</h1>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Название фирмы-заказчика"
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <select
                                name="workshop"
                                value={formData.workshop}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Цех</option>
                                {workshops.map(workshop => (
                                    <option key={workshop.id} value={workshop.id}>
                                        {workshop.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <select
                                name="executor"
                                value={formData.executor}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Исполнитель</option>
                                {executors.map(executor => (
                                    <option key={executor.id} value={executor.id}>
                                        {executor.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="orderName"
                                value={formData.orderName}
                                onChange={handleChange}
                                placeholder="Название заказа"
                                className={styles.input}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={!isFormValid() || loading}
                        >
                            {loading ? 'Отправка...' : 'Отправить на утверждение'}
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
// src/front/pages/OrderCompletionPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/OrderCompletionPage.module.css';

export default function OrderCompletionPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Заглушка данных о заказе
    const order = {
        id,
        title: 'Изготовление корпуса насоса',
        description:
            'Производство корпуса для насосного агрегата. Материал: сталь 09Г2С. Контроль качества и испытания в лаборатории.',
        manager: 'Иванов И.И.',
        dateStart: '2025-09-10',
        dateEnd: '2025-10-20',
    };

    // TODO: заменить на реальный запрос к бэкенду
    // useEffect(() => {
    //     fetch(`/api/orders/${id}`)
    //         .then(res => res.json())
    //         .then(setOrder)
    // }, [id]);

    const handleMarkComplete = () => {
        // TODO: запрос на отметку выполнения
        // fetch(`/api/orders/${id}/complete`, { method: 'POST' })
        //     .then(...)
        alert(`Заказ №${id} отмечен как выполненный`);
        navigate('/profile');
    };

    const handleMarkExpired = () => {
        // TODO: запрос на отметку просрочки
        // fetch(`/api/orders/${id}/expired`, { method: 'POST' })
        //     .then(...)
        alert(`Заказ №${id} отмечен как просроченный`);
        navigate('/profile');
    };

    return (
        <div className={styles.page}>
            <Header isAuthenticated={true} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Заказ №{order.id}</h1>

                    <div className={styles.content}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://via.placeholder.com/400x250"
                                alt="Изображение заказа"
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.info}>
                            <h2 className={styles.subtitle}>{order.title}</h2>
                            <p className={styles.description}>{order.description}</p>
                            <p><strong>Ответственный менеджер:</strong> {order.manager}</p>
                            <p><strong>Дата начала:</strong> {order.dateStart}</p>
                            <p><strong>Дата окончания:</strong> {order.dateEnd}</p>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={handleMarkComplete}
                            className={`${styles.button} ${styles.green}`}
                        >
                            Выполнен
                        </button>
                        <button
                            onClick={handleMarkExpired}
                            className={`${styles.button} ${styles.red}`}
                        >
                            Просрочен
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

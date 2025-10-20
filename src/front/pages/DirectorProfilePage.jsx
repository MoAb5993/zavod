// src/pages/DirectorProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/DirectorProfilePage.module.css';

export default function DirectorProfilePage({ user, onLogout }) {
    const navigate = useNavigate();

    const approvedOrders = [
        // Заглушки — заменишь позже, когда подключим бэкенд
        {
            id: 1,
            title: 'Производственный план №1',
            description: 'Изготовление партии каучука',
            image: '/images/placeholder1.jpg', // TODO: заменить
        },
        {
            id: 2,
            title: 'Производственный план №2',
            description: 'Производство авиационного топлива',
            image: '/images/placeholder2.jpg', // TODO: заменить
        },
    ];

    return (
        <div className={styles.page}>
            <Header
                isAuthenticated={true}
                isDirector={true}
                onLogout={onLogout}
            />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Левая колонка — карточка директора */}
                    <aside className={styles.profileCard}>
                        <img
                            src={user?.photo || '/images/user-placeholder.png'}
                            alt="Фото пользователя"
                            className={styles.userPhoto}
                        />
                        <h2 className={styles.userName}>{user?.fullName || 'Иванов Иван Иванович'}</h2>
                        <p><strong>Должность:</strong> {user?.position || 'Директор'}</p>
                        <p><strong>Email:</strong> {user?.email || 'director@zavod.ru'}</p>
                        <p><strong>Телефон:</strong> {user?.phone || '+7 (900) 000-00-00'}</p>
                        <p><strong>Дата рождения:</strong> {user?.birthDate || '01.01.1975'}</p>
                        <p><strong>Дата найма:</strong> {user?.hireDate || '15.03.2000'}</p>
                    </aside>

                    {/* Правая часть — утверждённые заказы */}
                    <section className={styles.ordersSection}>
                        <h2 className={styles.sectionTitle}>Утверждённые заказы</h2>

                        <div className={styles.ordersGrid}>
                            {approvedOrders.map(order => (
                                <div key={order.id} className={styles.orderCard}>
                                    <img
                                        src={order.image}
                                        alt={order.title}
                                        className={styles.orderImage}
                                    />
                                    <h3 className={styles.orderTitle}>{order.title}</h3>
                                    <p className={styles.orderDesc}>{order.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <button
                                className={`${styles.actionButton} ${styles.createOrderButton}`}
                                onClick={() => navigate('/create-plan')}
                            >
                                Создать заказ
                            </button>

                            <button
                                className={`${styles.actionButton} ${styles.registerButton}`}
                                onClick={() => navigate('/register-employee')}
                            >
                                Зарегистрировать сотрудника
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

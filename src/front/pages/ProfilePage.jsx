import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ProfilePage.module.css';

export default function ProfilePage({ user }) {
    const navigate = useNavigate();

    // 🔹 Временные заказы (заглушка)
    const orders = [
        { id: 1, title: 'Изготовление узла фильтрации', status: 'в процессе' },
        { id: 2, title: 'Производство корпуса резервуара', status: 'в процессе' },
        { id: 3, title: 'Очистка реактора №2', status: 'в процессе' },
    ];

    return (
        <div className={styles.page}>
            <Header isAuthenticated={true} />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Левая часть — карточка пользователя */}
                    <div className={styles.userCard}>
                        <img
                            src={user?.photo || 'https://via.placeholder.com/150'}
                            alt="Фото сотрудника"
                            className={styles.userPhoto}
                        />
                        <h2 className={styles.userName}>{user?.name || 'Имя Фамилия'}</h2>
                        <p><strong>E-mail:</strong> {user?.email || 'example@mail.com'}</p>
                        <p><strong>Телефон:</strong> {user?.phone || '+7 (900) 000-00-00'}</p>
                        <p><strong>Дата найма:</strong> {user?.hireDate || '01.01.2023'}</p>
                        <p><strong>Дата рождения:</strong> {user?.birthDate || '01.01.1990'}</p>
                    </div>

                    {/* Правая часть — список заказов */}
                    <div className={styles.ordersSection}>
                        <h2 className={styles.ordersTitle}>Мои заказы</h2>

                        <div className={styles.ordersGrid}>
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className={styles.orderCard}
                                    onClick={() => navigate(`/order-completion/${order.id}`)}
                                >
                                    <img
                                        src="https://via.placeholder.com/200x120"
                                        alt="Изображение проекта"
                                        className={styles.orderImage}
                                    />
                                    <h3 className={styles.orderTitle}>{order.title}</h3>
                                    <p className={styles.orderStatus}>
                                        Статус: <strong>{order.status}</strong>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <button
                                className={`${styles.button} ${styles.yellow}`}
                                onClick={() => navigate('/create-plan')}
                            >
                                Создать заказ
                            </button>
                            <button
                                className={`${styles.button} ${styles.blue}`}
                                onClick={() => navigate('/register-employee')}
                            >
                                Зарегистрировать сотрудника
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

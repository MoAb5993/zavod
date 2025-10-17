import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ProfilePage.module.css';

export default function ProfilePage({ user, onNavigate, onLogout }) {
    const [orders, setOrders] = useState([]);

    // эмуляция загрузки данных заказов с сервера
    useEffect(() => {
        // TODO: заменить на fetch('/api/orders') после подключения бэкенда
        setTimeout(() => {
            setOrders([
                { id: 1, title: 'Проект А' },
                { id: 2, title: 'Проект Б' },
                { id: 3, title: 'Проект В' },
                { id: 4, title: 'Проект Г' },
            ]);
        }, 400);
    }, []);

    return (
        <div className={styles.page}>
            <Header isAuthenticated={true} onLogout={onLogout} onNavigate={onNavigate} />

            <main className={styles.main}>
                <div className={styles.profileContainer}>
                    {/* Левая карточка пользователя */}
                    <div className={styles.userCard}>
                        <div className={styles.avatar}></div>
                        <p><strong>ФИО:</strong> {user.fullName || '—'}</p>
                        <p><strong>Должность:</strong> {user.position || '—'}</p>
                        <p><strong>Дата рождения:</strong> {user.birthDate || '—'}</p>
                        <p><strong>E-mail:</strong> {user.email || '—'}</p>
                        <p><strong>Номер телефона:</strong> {user.phone || '—'}</p>
                        <p><strong>Дата найма:</strong> {user.hireDate || '—'}</p>
                    </div>

                    {/* Правая часть — список заказов */}
                    <div className={styles.ordersSection}>
                        <h2>Список реализуемых заказов</h2>

                        <div className={styles.ordersGrid}>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <div key={order.id} className={styles.orderCard}>
                                        <img
                                            src="https://images.unsplash.com/photo-1581091215367-59ab6c8d6b3e?fit=crop&w=400&h=300"
                                            alt={order.title}
                                        />
                                        <p className={styles.projectTitle}>{order.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.noOrders}>Нет реализуемых заказов</p>
                            )}
                        </div>

                        {/* Кнопки снизу */}
                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.planButton}
                                onClick={() => onNavigate('createPlan')}
                            >
                                Организовать план
                            </button>

                            <button
                                className={styles.registerButton}
                                onClick={() => onNavigate('registerEmployee')}
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

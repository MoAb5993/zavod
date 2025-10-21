import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/OrdersPage.module.css';

export default function OrdersPage({ onNavigate, onLogout }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Загрузка списка заказов (заменить на реальный API)
    useEffect(() => {
        // Имитация загрузки данных
        setTimeout(() => {
            // Временные данные для примера
            setOrders([
                {
                    id: 1,
                    projectName: 'Проект "К"',
                    sender: 'Иванов Иван Иванович'
                },
                {
                    id: 2,
                    projectName: 'Проект "О"',
                    sender: 'Петров Петр Петрович'
                },
                {
                    id: 3,
                    projectName: 'Проект "М"',
                    sender: 'Сидоров Сидор Сидорович'
                },
                {
                    id: 4,
                    projectName: 'Проект "А"',
                    sender: 'Козлов Андрей Викторович'
                }
            ]);
            setLoading(false);
        }, 500);

        // TODO: Заменить на реальный запрос к API
        // fetch('/api/orders')
        //   .then(res => res.json())
        //   .then(data => {
        //     setOrders(data);
        //     setLoading(false);
        //   })
        //   .catch(error => {
        //     console.error('Ошибка загрузки заказов:', error);
        //     setLoading(false);
        //   });
    }, []);

    const handleViewOrder = (orderId) => {
        // Переход на страницу утверждения заказа
        // TODO: передать orderId в следующую страницу
        console.log('Просмотр заказа:', orderId);
        onNavigate('approve-order', { orderId });
    };

    return (
        <div className={styles.page}>
            <Header
                isAuthenticated={true}
                onLogout={onLogout}
                onNavigate={onNavigate}
            />

            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Список заказов</h1>

                    {loading ? (
                        <div className={styles.loading}>Загрузка...</div>
                    ) : orders.length === 0 ? (
                        <div className={styles.emptyState}>Нет доступных заказов</div>
                    ) : (
                        <div className={styles.ordersList}>
                            {orders.map(order => (
                                <div key={order.id} className={styles.orderItem}>
                                    <div className={styles.orderHeader}>
                                        <div>
                                            <h2 className={styles.projectName}>{order.projectName}</h2>
                                            <p className={styles.sender}>
                                                Отправитель: {order.sender}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleViewOrder(order.id)}
                                        className={styles.viewButton}
                                    >
                                        Просмотреть информацию
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
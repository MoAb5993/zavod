import React, { useEffect, useState } from 'react';
import styles from '../styles/OrderApprovalPage.module.css';

export default function OrderApprovalPage() {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    // TODO: при интеграции с бэкендом:
    // 1. Получать ID заказа из URL (например, через React Router useParams)
    // 2. Отправлять запрос на сервер для получения данных о заказе
    // 3. После получения данных — вызвать setOrder(response.data)
    // 4. Обработать ошибки, если заказ не найден
    useEffect(() => {
        // Пример:
        /*
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}`);
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
        */
        setLoading(false);
    }, []);

    // TODO: функция для утверждения заказа
    const handleApprove = async () => {
        // Пример:
        /*
        try {
            const response = await fetch(`/api/orders/${order.id}/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) throw new Error('Ошибка утверждения');
            alert('Заказ утвержден');
        } catch (error) {
            console.error(error);
        }
        */
    };

    // TODO: функция для отклонения заказа
    const handleReject = async () => {
        // Пример:
        /*
        try {
            const response = await fetch(`/api/orders/${order.id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Ошибка удаления');
            alert('Заказ отклонен');
        } catch (error) {
            console.error(error);
        }
        */
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Загрузка данных...</h2>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className={styles.page}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Нет данных о заказе</h2>
                    <p className={styles.subtitle}>Здесь будет отображаться информация о выбранном заказе после подключения бэкенда.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h2 className={styles.title}>Заказ</h2>

                <div className={styles.field}>
                    <label>Название фирмы-заказчика</label>
                    <input type="text" value={order.companyName} readOnly />
                </div>

                <div className={styles.field}>
                    <label>Цех</label>
                    <input type="text" value={order.workshop} readOnly />
                </div>

                <div className={styles.field}>
                    <label>Исполнитель</label>
                    <input type="text" value={order.executor} readOnly />
                </div>

                <div className={styles.field}>
                    <label>Название заказа</label>
                    <input type="text" value={order.projectName} readOnly />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.approve} onClick={handleApprove}>
                        Утвердить
                    </button>
                    <button className={styles.reject} onClick={handleReject}>
                        Отклонить
                    </button>
                </div>
            </div>
        </div>
    );
}

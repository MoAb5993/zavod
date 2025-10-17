import React, { useState } from "react";
import styles from "../styles/DirectorProfilePage.module.css";
import NotificationPanel from "../components/NotificationPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DirectorProfilePage({ user, onLogout, onNavigate }) {
    const [notifications, setNotifications] = useState([
        { id: 1, type: "success", message: 'План "X" успешно выполнен' },
        { id: 2, type: "error", message: 'План "Y" не выполнен в срок' },
        { id: 3, type: "info", message: "У вас новый план на утверждение" },
    ]);

    const handleNotificationClick = (id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <div className={styles.wrapper}>
            <Header
                isDirector
                notifications={notifications}
                onNotificationClick={handleNotificationClick}
                onLogout={onLogout}
            />

            <main className={styles.main}>
                <div className={styles.profileCard}>
                    <div className={styles.photoPlaceholder}></div>
                    <div className={styles.info}>
                        <p>ФИО: {user.name || "Иванов Иван Иванович"}</p>
                        <p>Должность: {user.position || "Директор"}</p>
                        <p>Дата рождения: {user.birthDate || "01.01.1980"}</p>
                        <p>E-mail: {user.email || "director@zavod.ru"}</p>
                        <p>Номер телефона: {user.phone || "+7 (900) 000-00-00"}</p>
                        <p>Дата найма: {user.hireDate || "01.05.2010"}</p>
                    </div>
                </div>

                <div className={styles.ordersSection}>
                    <h2>Список реализуемых заказов</h2>
                    <div className={styles.ordersGrid}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={styles.orderCard}>
                                <img src="/factory.jpg" alt="Производство" />
                                <p>Проект {i}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.buttons}>
                        <button
                            className={styles.createPlan}
                            onClick={() => onNavigate("create-plan")}
                        >
                            Организовать план
                        </button>
                        <button
                            className={styles.registerEmployee}
                            onClick={() => onNavigate("register-employee")}
                        >
                            Зарегистрировать сотрудника
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

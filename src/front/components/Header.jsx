import React, { useState } from 'react';
import { Factory, Bell } from 'lucide-react';
import styles from '../styles/Header.module.css';
import NotificationPanel from './NotificationPanel';

export default function Header({
                                   isAuthenticated = false,
                                   isDirector = false,
                                   notifications = [],
                                   onNotificationClick,
                                   onLogin,
                                   onLogout,
                                   onNavigate
                               }) {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Factory className={styles.logoIcon} />
                    <button
                        onClick={() => onNavigate && onNavigate('home')}
                        className={styles.logoButton}
                    >
                        Zavod.ru
                    </button>
                </div>

                <nav className={styles.nav}>
                    {isAuthenticated ? (
                        <>
                            {isDirector && (
                                <div className={styles.bellWrapper}>
                                    <Bell
                                        className={styles.bellIcon}
                                        onClick={() => setShowNotifications(prev => !prev)}
                                    />
                                    {showNotifications && (
                                        <NotificationPanel
                                            notifications={notifications}
                                            onNotificationClick={onNotificationClick}
                                        />
                                    )}
                                </div>
                            )}

                            <button
                                onClick={() => onNavigate && onNavigate('profile')}
                                className={styles.navLink}
                            >
                                Профиль
                            </button>
                            <button
                                onClick={() => onNavigate && onNavigate('orders')}
                                className={styles.navLink}
                            >
                                Заказы
                            </button>
                            <button
                                onClick={onLogout}
                                className={styles.logoutButton}
                            >
                                Выйти
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onLogin}
                            className={styles.loginButton}
                        >
                            Войти
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}

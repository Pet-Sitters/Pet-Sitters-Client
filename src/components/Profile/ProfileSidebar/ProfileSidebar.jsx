import React from 'react';
import styles from './ProfileSidebar.module.scss'

const ProfileSidebar = () => {
    return (
        <div className={styles.profileSidebar}>
            <div className={styles.profilePicture}>
                <img src="#" alt="Profile"/>
            </div>
            <div className={styles.profileName}>
                Фамилия Имя
            </div>
            <div className={styles.profileMenu}>
                <ul>
                    <li>Основные данные</li>
                    <li className={styles.active}>Мои питомцы</li>
                    <li>Мои заказы</li>
                    <li>Избранные ситтеры</li>
                    <li>Настройки</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSidebar;
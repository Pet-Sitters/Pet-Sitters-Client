import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Breadcrumb} from "antd";
import links from "../../router/links.js";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/')
                                                .filter((x) => x);



    const breadcrumbNameMap = {
        '/account': 'Профиль',
        '/account/personal': 'Основные данные',
        '/account/my-pets': 'Мои питомцы',
        '/account/add-pets': 'Добавить питомца',
        '/account/my-order': 'Мои заказы',
        '/account/my-sitter': 'Избранные ситтеры',
        '/account/settings': 'Настройки',
        '/account/calc': 'Калькулятор',
    };
    const items = [
        {
            title: <Link to="/">Главная</Link>,
            key: '/',
        },
        ...pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            return {
                title: <Link to={to}>{breadcrumbNameMap[to] || value}</Link>,
                key: to,
            };
        }),
    ];

    return (
        <Breadcrumb items={items} />
    );
};

export default Breadcrumbs;
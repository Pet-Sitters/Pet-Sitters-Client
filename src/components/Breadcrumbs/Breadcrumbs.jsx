import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Breadcrumb} from "antd";

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

    return (
        <Breadcrumb>
            {pathnames.map((value, index) =>{
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <Breadcrumb.Item key={to}>
                        <Link to={to}>{breadcrumbNameMap[to] || value}</Link>
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
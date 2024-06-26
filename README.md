# PETSITTERS

## :fire: Особенности

- используется библиотека [React](https://ru.react.js.org/)
- используется библиотека [Redux ](https://redux.js.org) для управления состоянием данных и пользовательским интерфейсом
- используется [Redux Thunk](https://github.com/reduxjs/redux-thunk) для асинхронных запросов

## :hammer_and_wrench: Установка

- установите [NodeJS](https://nodejs.org/en/)
- установите глобально:
  - [Yarn](https://yarnpkg.com/getting-started): `npm i -g yarn`
- скачайте сборку с помощью [Git](https://git-scm.com/downloads): `git clone https://github.com/Pet-Sitters/Pet-Sitters-Client`
- перейдите в скачанную папку со сборкой: `cd Pet-Sitters-Client`
- введите `yarn install`
- чтобы начать работу, введите команду: `yarn dev` (режим разработки)
- чтобы собрать проект, введите команду `yarn build` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.

## :open_file_folder: Файловая структура

```
Pet-Sitters-Client
├── public
│   └── assets
│       ├── fonts
│       ├── images
│       └── icons
├── src
│   ├── assets
│   ├── components
│   ├── core
│   ├── Layout
│   ├── pages
│   ├── router
│   └── SCSS
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── vite.config.js
├── package.json
├── yarn.lock
└── README.md
```

- Корень папки:
  - `.eslintrc.cjs` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `index.html` — основной файл html - точка входа в приложение
  - `package.json` — список зависимостей
  - `vite.config.js` — файл конфигурации vite
  - `yarn.lock` — дерево всех зависимостей с версиями
- Папка `src` - используется во время разработки:
  - шрифты: `public/assets/fonts`
  - изображения: `public/assets/images`
  - иконки: `public/assets/icons`
  - основыне переиспользуемые компоненты : `src/components`
  - страницы приложения : `src/pages`
  - стили, переменные для стилей, миксины : `src/SCSS`
  - настройки маршрутизации : `src/router`
  - слайсы, запросы, хуки, константы : `src/core`
  - базовый URL для отправки запросов на сервер находится в файле mainRequest.js : `src/core/utils/`

### Сторонние библиотеки

- все сторонние библиотеки устанавливаются в папку `node_modules`
  - для их загрузки воспользуйтеcь командой `yarn add package_name` (например, `yarn add jquery`)

## :envelope: Контакты

По всем вопросам пишите в [Telegram Наталье](https://t.me/Natalli_gf),в [Telegram Кириллу](https://t.me/kirill_dorokh) или в [Telegram Сергею](https://t.me/Sergey310583)

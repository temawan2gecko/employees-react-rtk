# Employee Manager App

Employee Manager App — это современное веб-приложение для управления сотрудниками. Пользователи могут регистрироваться, добавлять, изменять и удалять своих сотрудников, а также просматривать сотрудников других пользователей. При этом редактировать и удалять можно **только своих** сотрудников, что обеспечивает приватность и безопасность данных.

---

## Технологический стек

- **Backend:**  
  - [![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)  
  - [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)  
  - [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  

- **Frontend:**  
  - [![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
  - [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
  - [![Redux Toolkit](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)  
  - [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)  
  - [![Ant Design](https://img.shields.io/badge/Ant_Design-0170FE?style=flat&logo=antdesign&logoColor=white)](https://ant.design/)  

- **Безопасность:**  
  - [![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)  
  - [![bcrypt](https://img.shields.io/badge/bcrypt-338AF3?style=flat&logo=lock&logoColor=white)](https://www.npmjs.com/package/bcrypt)  

- **Инструменты разработки:**  
  - [![nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white)](https://nodemon.io/)   
  - [![concurrently](https://img.shields.io/badge/Concurrently-FFCC00?style=flat&logo=javascript&logoColor=black)](https://www.npmjs.com/package/concurrently)   


---

## Особенности проекта

- **Регистрация и аутентификация:** Пользователи могут создавать учетные записи и безопасно входить в систему.
- **CRUD для сотрудников:** Возможность создавать, читать, обновлять и удалять записи о сотрудниках.
- **Доступ к данным:** Каждый пользователь может редактировать и удалять только свои записи, но при этом имеет возможность просматривать записи других пользователей.
- **Современный интерфейс:** Удобный и стильный UI на основе Ant Design.
- **Надежная безопасность:** Аутентификация с JWT и хэширование паролей с bcrypt обеспечивают защиту данных.

---

## Установка и запуск

### Предварительные требования

- [Node.js](https://nodejs.org/) (рекомендуется версия 14 или выше)
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

### Шаг 1. Клонирование репозитория

```bash
git clone <URL_вашего_репозитория>
cd <название_папки_проекта>
```

### Шаг 2. Установка зависимостей

```bash
npm install
npm install --prefix client
```

### Шаг 3. Запуск приложения

```bash
npm run dev
```

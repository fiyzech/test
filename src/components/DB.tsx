// // DB.ts
// import mysql from 'mysql';

// const connection = mysql.createConnection({
//   host: 'localhost', // або IP-адреса вашого сервера бази даних
//   user: 'username', // ім'я користуqвача
//   password: 'password', // пароль
//   database: 'database_name' // назва бази даних
// });

// // Підключення до бази даних
// connection.connect((err) => {
//   if (err) {
//     console.error('Помилка підключення до бази даних:', err);cd myproject

//     return;
//   }
//   console.log('Підключено до бази даних');
// });

// // Вибірка даних з бази даних
// connection.query('SELECT * FROM your_table', (error, results, fields) => {
//   if (error) {
//     console.error('Помилка вибірки даних:', error);
//     return;
//   }
//   console.log('Результати вибірки:', results);
// });

// // Закриття з'єднання з базою даних після завершення операцій
// connection.end();

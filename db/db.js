import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // XAMPP default is usually empty
    database: 'portfolio' 
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database Connection Failed:", err.message);
    } else {
        console.log("MySQL (XAMPP) Connected Successfully!");
        connection.release();
    }
});

export default pool.promise();
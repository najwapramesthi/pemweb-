const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pertemuan5'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.stack);
        return;
    }
    console.log("Koneksi MySQL berhasil dengan id " + connection.threadId);
});

app.set('view engine', 'ejs');

// Routing (CRUD)

// Read (Menampilkan daftar pengguna)
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});

// Create (Menambah pengguna baru)
app.post('/add', (req, res) => {
    const { nama, email, phone } = req.body;
    const query = 'INSERT INTO users (nama, email, phone) VALUES (?, ?, ?)';
    connection.query(query, [nama, email, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Read single user data for update (Tampilkan pengguna yang ingin diupdate)
app.get('/edit/:id', (req, res) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.render('edit', { user: results[0] });
    });
});

// Update (Proses update data pengguna)
app.post('/update/:id', (req, res) => {
    const { nama, email, phone } = req.body;
    const query = 'UPDATE users SET nama = ?, email = ?, phone = ? WHERE id = ?';
    connection.query(query, [nama, email, phone, req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//hapus
app.get('/delete/:id', (req, res) => {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Jalankan server
app.listen(3000, () => {
    console.log("Server berjalan di port 3000, buka web melalui http://localhost:3000");
});
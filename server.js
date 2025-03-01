const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/samMoto.html');
});


// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aakash@1',
  database: 'contactDB',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

// Handle POST Request for Form Submission
app.post('/submit-form', (req, res) => {
  const { name, phone, email, enquiry } = req.body;

  const sql = 'INSERT INTO Contacts (name, phone, email, enquiry) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, phone, email, enquiry], (err, result) => {
    if (err) throw err;
        console.log('User registered:', result);
        res.send(`
            <script>
                alert('Registration successful!');
                window.location.href = '/';
            </script>
        `);
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

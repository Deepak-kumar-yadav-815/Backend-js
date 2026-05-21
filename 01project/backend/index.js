import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "JavaScript Joke",
            content: "Why did JavaScript go to therapy? Because it had too many callbacks."
        },
        {
            id: 3,
            title: "Backend Joke",
            content: "I told my server a joke... now it's responding slowly."
        },
        {
            id: 4,
            title: "Database Joke",
            content: "Why did the database administrator leave his wife? She had too many relationships."
        },
        {
            id: 5,
            title: "Bug Joke",
            content: "A bug in the code is never alone. It always brings friends."
        }
    ];

    res.json(jokes);
});

app.listen(port, () => {
    console.log(`Server is serving at http://localhost:${port}`);
});
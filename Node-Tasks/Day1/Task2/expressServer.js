const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());


let users = [
    {
        id: 1,
        firstName: "Shimaa",
        lastName: "Ahmed",
        role: "admin",
    }
];


app.get('/users', (req, res) => {
    res.status(200).json(users);
});


app.post('/users', (req, res) => {

    const newUser = req.body;

    newUser.id =
        users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;

    users.push(newUser);

    res.status(201).json(newUser);

});

app.put('/users/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const updatedUser = req.body;

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {

        return res.status(404).json({
            error: "User not found"
        });

    }

    users[index] = {
        ...users[index],
        ...updatedUser
    };

    res.status(200).json(users[index]);

});


app.patch('/users/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const updatedUser = req.body;

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {

        return res.status(404).json({
            error: "User not found"
        });

    }

    users[index] = {
        ...users[index],
        ...updatedUser
    };

    res.status(200).json(users[index]);

});

app.delete('/users/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {

        return res.status(404).json({
            error: "User not found"
        });

    }

    users = users.filter(user => user.id !== id);

    res.status(204).send();

});


app.use((req, res) => {
    res.status(404).json({
        error: "Page Not Found"
    });
});


app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});
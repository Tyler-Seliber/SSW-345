const users = [
    {
        id: 1,
        name: "Instructor",
        email: "instructor_345@stevens.edu",
    },
    {
        id: 2,
        name: "TA",
        email: "ta_345@stevens.edu",
    },
];

const router = app => {
    app.get('/', (request, response) => {
        response.send({ 
            message: 'Node.js and Express REST API'
        });
        app.get('/users', (request, response) => {
            response.send(users);
        });
    });
};

// Export the router
module.exports = router;
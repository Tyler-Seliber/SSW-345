// Load the MySQL pool
const pool = require('./data/config');

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
        // Display all workers query from remote DB
        app.get('/handles', (request, response) => {
        pool.query('SELECT * FROM Handle', (error, result) => {
            if (error) throw error;
    
            response.send(result);
        });
    });
    });
};

// Export the router
module.exports = router;
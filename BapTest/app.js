const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const db = require('./models');
const swaggerOptions = require('./config/swagger.config.js');

app = express(); 

// Middlewares
app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Get routes
const tasksRoutes = require('./routes/tasks.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/', tasksRoutes);
app.use('/auth', authRoutes);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Initialize database with a user and a task
const User = db.user;
const Task = db.task;
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync DB');
    initial(); 
});

function initial() {
    User.create({
        email: "carlosnoel_ojedaa@icloud.com",
        name: "Carlos Noel Ojeda Angulo",
        password: bcrypt.hashSync("test1234", 8)
    });

    Task.create({
        title: "Crear sistema de gestion de tareas",
        description: "API REST que permita el funcionamiento de un sistema de gestión de tareas, utilizando Node.js",
        deadline: "2022-09-25",
        comments: "Vamos Carlitos",
        user_email: "carlosnoel_ojedaa@icloud.com",
        tags: "Hoy"
    });
};

// Settings
app.set('json spaces', 4);

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Server on port ', process.env.PORT || 3001)
});
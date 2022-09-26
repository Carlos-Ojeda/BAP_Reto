module.exports = swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Task Management System",
            description: "Task management system so that users can view, add, edit or delete tasks to facilitate their day-to-day work.",
            contact: {
                name: "Carlos Noel Ojeda Angulo",
                url: "https://carlos-ojeda.github.io/",
                email: "carlosnoel_ojedaa@icloud.com"
            },
            servers: [`http://localhost:${process.env.PORT || 3001}`]
        },
        version: "1.0.0"
    },
    apis: ['.routes/*.js']
};
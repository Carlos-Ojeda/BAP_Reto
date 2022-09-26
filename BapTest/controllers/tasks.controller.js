const db = require("../models");

const Task = db.task;

module.exports.getTasks = (req,res) =>{
    Task.findAll({
        where: {
            user_email: req.body.user_email
        }
    }).then(taskList => {
        if (!taskList) {
            return res.status(404).send({message: "Task not found"});
        }
        res.send({
            taskList
        })
    }).catch(err => {
        res.status(500).send("Error");
    });
}

module.exports.createTask = (req,res) =>{
    Task.create({
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
        comments: req.body.comments,
        user_email: req.body.user_email,
        tags: req.body.tags
    }).then(task => {
        if(!task){
            res.status(503).send("Try Later");
        }else{
            res.send({message: "Created"});
        }
    }).catch(err => {
        res.status(500).send("Error");
    });
}

module.exports.editTask = (req,res) =>{
    Task.findOne({
        where: {
            id: req.body.task_id,
            user_email: req.body.user_email
        }
    }).then(task => {
        if (!task) {
            return res.status(404).send({message: "Task not found"});
        }   
        Task.update({
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
            comments: req.body.comments,
            tags: req.body.tags}
        ,{
            where: {
                id: req.body.task_id,
                user_email: req.body.user_email 
            }
        }).then(task2 => {
            if(!task2){
                res.status(503).send("Try Later");
            }else{
                res.send({message: "Edited"});
            }
        })
    }).catch(err => {
        res.status(500).send("Error");
    });
}

module.exports.deleteTask = (req,res) =>{

    Task.findOne({
        where: {
            id: req.body.task_id,
            user_email: req.body.user_email
        }
    }).then(task => {
        if (!task) {
            return res.status(404).send({message: "Task not found"});
        }   
        Task.destroy({
            where:{
                id: req.body.task_id,
                user_email: req.body.user_email
            }
        }).then(task => {
            if(task){
                res.send({message: "Deleted"});
            }else{
                res.status(503).send("Try Later");
            }
        })
    }).catch(err => {
        res.status(500).send("Error");
    });



    
}

module.exports.getTask = (req,res) =>{
    Task.findOne({
        where: {
            id: req.params.task_id,
            user_email: req.body.user_email
        }
    }).then(task => {
        if (!task) {
            return res.status(404).send({message: "Task not found"});
        }
        res.send({
            task
        })
    }).catch(err => {
        res.status(500).send("Error");
    });
}
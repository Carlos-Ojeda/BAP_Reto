const verifyNoSQLInjection = (req,res,next) => {
    const onlyAllowedPattern = /^[-.@_A-Za-z0-9 ]+$/;
    var title, description, deadline, comments, user_email, tags = "";
    title += req.body.title;
    description += req.body.description;
    deadline += req.body.deadline;
    comments += req.body.comments;
    user_email += req.body.user_email;
    tags += req.body.tags;
    var userQuery = "" + title + description + deadline + comments + user_email + tags;
    
    if(!userQuery.match(onlyAllowedPattern)){
        return res.status(400).json({ message: "No special characters, please!"})
    }else{
        next();
    }
    
}
const verifyNoAuthSQLInjection = (req,res,next) => {
    const onlyAllowedPattern = /^[-.@_A-Za-z0-9 ]+$/;
    var name, email, password = "";
    name += req.body.name;
    email += req.body.email;
    password += req.body.password;
    var userQuery = "" + name + email + password; 
    
    if(!userQuery.match(onlyAllowedPattern)){
      return res.status(400).json({ message: "No special characters, please!"})
    }else{
        next();
    }
    
}

const verifyInput = {
    verifyNoSQLInjection: verifyNoSQLInjection,
    verifyNoAuthSQLInjection: verifyNoAuthSQLInjection
};

module.exports = verifyInput;
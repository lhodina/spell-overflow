const db = require('./db/models')

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    };
};

const logoutUser = (req, res) => {
    delete req.session.auth;
    req.session.save(() => {
        res.redirect('/')
    })
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/users/login');
    }
    return next();
};

const restoreUser = async (req, res, next) => {
    // console.log("inside restore user")
    if (req.session.auth) {
        // console.log("inside if block req.session.auth")
        const { userId } = req.session.auth;
        try {
            // console.log("inside try block")
            const user = await db.User.findByPk(userId);
            // console.log("this is user", user)
            if (user) {
                // console.log("inside if user")
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            // console.log("inside catch error")
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        // console.log("inside else")
        res.locals.authenticated = false;
        next();
    }
};

module.exports = {
    loginUser,
    logoutUser,
    requireAuth,
    restoreUser
};

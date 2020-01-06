import routes from '../routes.js'
import User from '../models/User';

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"})
}

export const postJoin = async (req, res) => {
    // console.log( req.body ) // for checking request body
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render('join', {pageTitle: "Join"})
    } else {
        // To Do: Register User
        try{
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
        } catch( error ) {
            console.log(error);
        }

        // To Do: Log In User
        res.redirect( routes.home )
    }
}

export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Login"})
}
export const postLogin = (req, res) => {
    const {
        body: { id, password }
    } = req;
    res.redirect( routes.home )
}

export const logout = (req, res) => {
    // res.render("logout", {pageTitle: "Log Out"})
    res.redirect(routes.home)
}

export const users = (req, res) => {
    res.render("users", {pageTitle: "Users"})
}

export const userDetail = (req, res) => {
    res.render("userDetail", {pageTitle: "User Detail"})
}

export const editProfile = (req, res) => {
    res.render("editProfile", {pageTitle: "Edit Profile"})
}

export const changePassword = (req, res) => {
    res.render("changePassword", {pageTitle: "Change Password"})
}

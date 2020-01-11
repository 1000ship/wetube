import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import { logout, postJoin, getJoin, postLogin, getLogin, postGithubLogIn } from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';
import passport from 'passport';

const globalRouter = express.Router();
globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)

globalRouter.get(routes.join, onlyPublic, getJoin)
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin)

globalRouter.get(routes.login, onlyPublic, getLogin)
globalRouter.post(routes.login, onlyPublic, postLogin)

globalRouter.get(routes.logout, onlyPrivate, logout)

// for github
globalRouter.get(routes.github, passport.authenticate('github'));
globalRouter.get(routes.githubLoginCallback,
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogIn
);

export default globalRouter
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null; // passport가 알아서 다 해줌
    console.log(req.user);

    let defaultRender = res.render;
    res.render = (...args) => {
        console.log('실행된 파일 ', args[0])
        defaultRender.apply(res, args)
    }

    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user)
        res.redirect(routes.home);
    else
        next();
}

export const onlyPrivate = (req, res, next) => {
    if(req.user)
        next();
    else
        res.redirect(routes.home);
}

export const uploadVideo = multerVideo.single('videoFile');
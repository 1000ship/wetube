import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || {}; // passport가 알아서 다 해줌

    let defaultRender = res.render;
    res.render = (...args) => {
        console.log('실행된 파일 ', args[0])
        defaultRender.apply(res, args)
    }

    next();
}

export const uploadVideo = multerVideo.single('videoFile');
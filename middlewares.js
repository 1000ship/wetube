import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;

    let defaultRender = res.render
    res.render = (...args) => {
        console.log('실행된 파일 ', args[0])
        defaultRender.apply(res, args)
    }

    next();
}


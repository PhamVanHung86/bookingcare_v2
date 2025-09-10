import express from 'express'
import getHomepage from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomepage)

    return app.use('/', router)
}

export default initWebRoutes
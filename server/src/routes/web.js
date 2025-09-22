import express from "express";
import {
  getHomepage,
  getCRUD,
  postCRUD,
  displayCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
} from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomepage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.post("/put-crud", putCRUD);
  router.get("/delete-crud", deleteCRUD);

  return app.use("/", router);
};

export default initWebRoutes;

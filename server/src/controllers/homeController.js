import db from "../models/index";
import {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
} from "../services/CRUDService";

export const getHomepage = async (req, res) => {
  try {
    return res.render("homepage.ejs");
  } catch (e) {
    console.log(e);
  }
};

export const getCRUD = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (error) {
    console.log(error);
  }
};

export const postCRUD = async (req, res) => {
  let message = await createNewUser(req.body);
  console.log(req.body);
  console.log(message);
  return res.send("Post CRUD from service");
};

export const displayCRUD = async (req, res) => {
  let data = await getAllUser();
  console.log("---------------------------------");
  console.log(data);
  console.log("---------------------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

export const getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await getUserInfoById(userId);
    return res.render("editCRUD.ejs", { user: userData });
  } else {
    return res.send("User not found!");
  }
};

export const putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

export const deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await deleteUserById(id);
    return res.send("Delete the user success!");
  } else {
    return res.send("User not found!");
  }
};

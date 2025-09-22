import bcrypt from "bcryptjs";
import db from "../models";

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  try {
    let hashPasswordFromBcrypt = hashUserPassword(data.password);
    await db.user.create({
      email: data.email,
      password: hashPasswordFromBcrypt,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      gender: data.gender === "1" ? true : false,
      roleId: data.roleId,
    });

    return "OK! Create new user success!";
  } catch (error) {
    throw error;
  }
};
const hashUserPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const getAllUser = async () => {
  try {
    let users = db.user.findAll({
      raw: true,
    });
    return users;
  } catch (e) {
    throw e;
  }
};

const getUserInfoById = async (userId) => {
  try {
    let user = await db.user.findOne({
      where: { id: userId },
      raw: true,
    });

    if (user) {
      return user;
    } else {
      return {};
    }
  } catch (error) {
    throw error;
  }
};

const updateUserData = async (data) => {
  try {
    let user = await db.user.findOne({
      where: { id: data.id },
    });
    if (user) {
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.address = data.address;
      user.phoneNumber = data.phoneNumber;
      user.gender = data.gender === "1" ? true : false;
      user.roleId = data.roleId;

      await user.save();
      let allUsers = db.user.findAll();
      return allUsers;
    } else {
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteUserById = async (userId) => {
  try {
    let user = await db.user.findOne({
      where: { id: userId },
    });
    if (user) {
      await user.destroy();
    }
    return;
  } catch (e) {
    throw e;
  }
};
export {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
};

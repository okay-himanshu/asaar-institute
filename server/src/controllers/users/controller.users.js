import jwt from "jsonwebtoken";

import { UserModel } from "../../models/users/model.users.js";
import response from "../../utils/util.response.js";
import bcryptPassword from "../../utils/util.bcrypt.js";
import { ENV_CONFIG } from "../../config/env_config.js";

export default class handleUser {
  static async signup(req, res) {
    const { name, email, phone, address, password, confirmPassword } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
    try {
      // Checking all the required fields

      if (name && email && phone && address && password && confirmPassword) {
        // Checking if email is valid or not
        if (!emailRegex.test(email)) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "Invalid email format"
          );
        }

        // Checking if phone num. is valid or not
        if (!phoneRegex.test(phone) || phone.length !== 10) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "Invalid phone number"
          );
        }

        // Check if password meets minimum requirements
        if (password.length < 6) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "Password must be at least 6 characters"
          );
        }

        // Checking if passwords match
        if (password !== confirmPassword) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "Passwords do not match"
          );
        }

        // checking if the user already exists with the given email or not

        const checkExistedUser = await UserModel.findOne({ email });
        if (checkExistedUser) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "User with this email already exists"
          );
        }
        // If all check passes
        // Hashing the password
        const hashPassword = await bcryptPassword.hash(password);

        // saving the user to the database
        const newUser = await new UserModel({
          name,
          email,
          phone,
          address,
          password: hashPassword,
        }).save();

        // generating token
        if (newUser) {
          const token = jwt.sign(
            { id: newUser._id },
            ENV_CONFIG.JWT_SECRET_KEY,
            {
              expiresIn: "7d",
            }
          );

          // Send success response if signup logic is successful
          return response.sendJsonResponse(
            res,
            true,
            201,
            "User Signup successfully",
            {
              user: {
                _id: newUser._id,
                name,
                email,
                phone,
                address,
                createAt: newUser.createdAt,
                updateAt: newUser.updatedAt,
              },
              token,
            }
          );
        } else {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "All fields are required"
          );
        }
      } else {
        return response.sendJsonResponse(
          res,
          false,
          400,
          "All fields are required"
        );
      }
    } catch (error) {
      return response.sendErrorResponse(res, error);
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      // Check if email and password are provided
      if (email && password) {
        // Checking if email is valid or not

        if (!emailRegex.test(email)) {
          return response.sendJsonResponse(
            res,
            false,
            400,
            "Invalid email format"
          );
        }

        // Checking if the user exists with the given email
        const user = await UserModel.findOne({ email });

        if (!user) {
          return response.sendJsonResponse(res, false, 404, "User not found");
        }

        // Checking if the provided password matches the hashed password in the database
        const passwordMatch = bcryptPassword.compare(password, user.password);

        if (!passwordMatch) {
          return response.sendJsonResponse(res, false, 401, "Invalid password");
        }

        // If email and password are valid, generate a JWT token
        const token = jwt.sign({ id: user._id }, ENV_CONFIG.JWT_SECRET_KEY, {
          expiresIn: "7d",
        });

        // Send success response with JWT
        return response.sendJsonResponse(res, true, 200, "Login successful", {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          },
          token,
        });
      } else {
        return response.sendJsonResponse(
          res,
          false,
          400,
          "Email and password are required"
        );
      }
    } catch (error) {
      return response.sendErrorResponse(res, error);
    }
  }
  static forgetPassword(req, res) {}
  static resetPassword(req, res) {}
  static logout(req, res) {}
  static deleteAccount(req, res) {}
}

import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long",

            });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exist",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            success: true,
            message: "Account Created Successfully",
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register",
        })
    }
}

export const login = async (req, res) => {
    try {

        const {email ,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"incorrect email or password"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            });
        }

        const token = await jwt.sign({userId:user._id}, process.env.SECRET_KEY, {expiresIn: "1d"})
        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly:true, sameSite:"strict"}).json({
            success:true,
            message:`Welcome back ${user.firstName}`,
            user
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register",
        })
    }
}

export const logout = async (_, res) => {
    try {
        return res.status(200).cookie("token", "" ,{maxAge: 0}).json({
            message:"logout successfull",
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}
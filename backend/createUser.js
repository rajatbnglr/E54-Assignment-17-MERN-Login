const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("./models/User");

const createUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        const email = "test@example.com";
        const password = "Test@123";

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email: email,
            password: hashedPassword
        });

        await user.save();

        console.log("Test user created successfully");
        console.log("Email:", email);
        console.log("Password:", password);

        await mongoose.disconnect();
    } catch (error) {
        console.error("Error creating user:", error);
    }
};

createUser();
const db = require("../config/db");
const bcrypt = require("bcrypt");

const register = async(name, email, role, password) => {

    const hashPassword = await bcrypt.hash(password, 10);

    return new Promise((resolve, reject)=>{
        
        db.query("INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)",[name, email, role, hashPassword], (error, result)=>{
            if(error){
                reject(error);
                return;
            }
            resolve();
        });
    });   
};

const login = async (email, password) => {

    const user = await new Promise((resolve, reject) => {

        db.query(
            "SELECT id, name, email, password, role FROM users WHERE email = ?",
            [email],
            (error, result) => {

                if (error) {
                    reject(error);
                    return;
                }

                resolve(result[0]);
            }
        );

    });

    if (!user) {
        throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("Invalid password");
    }

    return user;
};

module.exports = {
  register,
  login
};
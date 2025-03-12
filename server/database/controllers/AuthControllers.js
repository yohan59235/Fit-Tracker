/* eslint-disable import/no-extraneous-dependencies */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByNomdecomptePlusPassword(
      req.body.nomdecompte
    );
    if (user.length === 0) {
      res.sendStatus(422);
    }
    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.password
    );
    if (verified === true) {
      const token = await jwt.sign(
        {
          sub: user[0].id,
          nomdecompte: user[0].nomdecompte,
        },
        process.env.APP_SECRET,
        {
          expiresIn: "7d",
        }
      );
      res
        .cookie("auth", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          msg: "Connexion réussie",
          id: user[0].id,
          nomdecompte: user[0].nomdecompte,
          token,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("auth").sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  logout,
};

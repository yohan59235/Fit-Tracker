const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const users = await tables.user.read(req.params.id);
    if (users === null) {
      res.sendStatus(404);
    } else {
      res.json(users);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  const usersInfos = {
    id: req.body.id,
    nomdecompte: req.body.nomdecompte,
  };

  try {
    const result = await tables.user.update(usersInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "utilisateur introuvable" });
    } else {
      res.json({ msg: "utilisateur modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  const usersInfos = {
    nomdecompte: req.body.nomdecompte,
    hashedPassword: req.body.hashedPassword,
  };
  try {
    const result = await tables.user.create(usersInfos);
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const detroy = async (req, res, next) => {
  try {
    const result = await tables.user.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "utilisateur introuvable" });
    } else {
      res.json({ msg: "utilisateur supprimé avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  detroy,
};

// const tables = require("../tables");

// const add = async (req, res, next) => {
//   const { user_id, exercice_id } = req.body;
//   try {
//     const alreadyAdded = await tables.user_exos.isAlreadyAdded(
//       user_id,
//       exercice_id
//     );
//     if (alreadyAdded) {
//       return res.status(409).send("Cet exercice est déjà ajouté");
//     }

//     const insertId = await tables.user_exos.addExercice(user_id, exercice_id);
//     res.status(201).json({ insertId });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = {
//   add,
// };

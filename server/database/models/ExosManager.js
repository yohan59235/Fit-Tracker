const AbstractManager = require("./AbstractManager");

class ExosManager extends AbstractManager {
  constructor() {
    super({ table: "user_exos" });
  }

  async addExercice(userId, exerciceId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, exercice_id) VALUES (?, ?)`,
      [userId, exerciceId]
    );
    return result.insertId;
  }

  async getAllByUser(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async deleteExos(userId, exerciceId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ? AND exercice_id = ?`,
      [userId, exerciceId]
    );
    return result.affectedRows > 0;
  }

  async isAlreadyAdded(userId, exerciceId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ? AND exercice_id = ?`,
      [userId, exerciceId]
    );
    return rows.length > 0;
  }
}

module.exports = ExosManager;

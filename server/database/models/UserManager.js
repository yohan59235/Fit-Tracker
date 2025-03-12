const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(usersInfos) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nomdecompte, hashed_password) VALUES (?,?)`,
      [usersInfos.nomdecompte, usersInfos.hashedPassword]
    );
    return result.addUser;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT nomdecompte from ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, nomdecompte, hashed_password from ${this.table}`
    );
    return rows;
  }

  async readByNomdecomptePlusPassword(nomdecompte) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE nomdecompte=?`,
      [nomdecompte]
    );
    return rows;
  }

  // The U of CRUD - Update operation

  async update(usersInfos) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET nomdecompte=? WHERE id=?`,
      [usersInfos.nomdecompte, usersInfos.id]
    );
    return rows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = UserManager;

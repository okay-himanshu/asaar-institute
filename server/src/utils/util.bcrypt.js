import bcrypt from "bcrypt";

export default class bcryptPassword {
  static async hash(password) {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  static compare() {}
}

import { Connection } from "./index";

export const getAllUsers = async () => {
	return new Promise((resolve, reject) => {
		Connection.query("SELECT * from myth_users", (err, results) => {
			if (err) {
				return reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

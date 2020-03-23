import { Connection } from "./index";

export const getNewsPosts = async () => {
	return new Promise((resolve, reject) => {
		Connection.query("SELECT * from news_posts", (err, results) => {
			if (err) {
				return reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

export default {
	getNewsPosts
};
import { MongoClient, type Db } from "mongodb";

let db: Db;
export async function connect() {
	if (db) return db;
	// if (typeof process.env.MONGO_URL === "undefined")
	// 	throw new Error("Missing Mongo URL from env");
	if (typeof process.env.MONGO_DB === "undefined")
		throw new Error("Missing Mongo DB from env");
	const client = new MongoClient(process.env.MONGODB_URI as string);
	await client.connect();

	return (db = client.db(process.env.MONGO_DB));
}

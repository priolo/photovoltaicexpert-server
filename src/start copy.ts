import * as path from "path";
import { Root } from "typexpress";

console.log("********3");

let env = new Root();

env.start({
	children: {
		"HttpPlugin": {
			port: 3000,
			// https: {
			// 	privkey: path.join(__dirname, "../assets/privkey.pem"),
			// 	pubcert: path.join(__dirname, "../assets/pubcert.pem"),
			// }
		},
		"httpStatic": {
			staticPaths: {
				"/app" : {
					path: path.join(__dirname, "../static"),
					isIndex: true,
				}
			},
		},
		"httpBodyParser": {},
		"HttpSessionPlugin": {},
		"HttpRoutingPlugin": {
			dir: `${__dirname}/routers`,
		},
		"typeorm": {
			typeorm: {
				"type": "sqlite",
				"username": null,
				"password": null,
				"database": path.join(__dirname, "../database/database.sqlite"),
				"synchronize": true,
				"logging": true,
				"entities": [
					path.join(__dirname, "./models/**/*.js")
				],
				// "migrations": [
				// 	"./database/migration/**/*.js"
				// ],
				// "subscribers": [
				// 	"../../subscriber/**/*.js"
				// ],
				// "cli": {
				// 	"entitiesDir": "app/models",
				// 	"migrationsDir": "database/migration",
				// 	"subscribersDir": "app/subscriber"
				// }
			},
		},

		"my-auth": {
			path: path.join(__dirname, "./plugins/auth"),
		},

		"my-notify": {
			path: path.join(__dirname, "./plugins/firebaseNotify"),
		}

	},
	
	// typeorm: {
	// 	"type": "sqlite",
	// 	"username": null,
	// 	"password": null,
	// 	"database": path.join(__dirname, "../database/database.sqlite"),
	// 	"synchronize": true,
	// 	"logging": true,
	// 	"entities": [
	// 		path.join(__dirname, "./models/**/*.js")
	// 	],
	// 	// "migrations": [
	// 	// 	"./database/migration/**/*.js"
	// 	// ],
	// 	// "subscribers": [
	// 	// 	"../../subscriber/**/*.js"
	// 	// ],
	// 	// "cli": {
	// 	// 	"entitiesDir": "app/models",
	// 	// 	"migrationsDir": "database/migration",
	// 	// 	"subscribersDir": "app/subscriber"
	// 	// }
	// },
	// routers: { path: path.join(__dirname, "./routers") },
});

console.log("Continue...");
require('dotenv').config()
const history = require('express-history-api-fallback')
const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'DEV') {
	app.use(cors({
			origin: "http://localhost:8080"
		})
	);
}

const index = require("./routes/index");

app.use("/api", index);

const clientRoot = path.join(__dirname, '../client/dist');
app.use('/', express.static(clientRoot))
app.use(history('index.html', { root: clientRoot }))


// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	// return the error message only in development mode
	res.json({
		message: err.message,
		error:
			req.app.get("env") === "development"
				? err.message
				: {
						message:
							"Something went wrong with your request, please try again and if the problem persists, contact an administrator."
					}
	});
});

console.log(process.env.NODE_ENV)

module.exports = app;

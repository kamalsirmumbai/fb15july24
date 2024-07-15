const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host : "sql12.freesqldatabase.com",
	user : "sql12719817", 
	password : "zfPIV3jb4J",
	database: "sql12719817"
});

app.post("/save", (req, res) => {
	let data = [req.body.name, req.body.feedback];
	let sql = "insert into student values(?, ?)";
	con.query(sql, data, (err, result) => {
		if (err)		res.send(err);
		else			res.send(result);
	});
});

app.listen(port,  () => { console.log("ready @ 9000"); });







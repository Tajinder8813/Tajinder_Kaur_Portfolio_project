import express from "express";
import route from "./routes/route.js";
import pool from "./db/db.js"; // This is your new MySQL connection
import path from 'path';
import { fileURLToPath } from "url";// Missing Import Added
const app = express();
const port = 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware for parsing form data (essential for your contact form)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setup ejs template
app.set('views','./views');
app.set('view engine','ejs');
//setup static file
app.use(express.static(path.join(process.cwd(),'public')))
//route
app.use('/',route);
// Start the server
app.listen(port,()=>{
    // Backticks ensure the variable ${port} is actually replaced by 5000
    console.log(`Server is running at http://localhost:${port}`)
})
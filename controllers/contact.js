import pool from "../db/db.js";

export const saveContact = async (req, res) => {
    try {
        const { full_name, email, phone, subject, message } = req.body;
        
        // MySQL Query instead of Mongoose
        const sql = "INSERT INTO contacts (full_name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)";
        await pool.query(sql, [full_name, email, phone, subject, message]);

        // Redirect or show success message
        res.render('index', { msg: 'Thank you! Your message was saved in XAMPP.' });
    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).send("Server Error: Could not save message to XAMPP.");
    }
};


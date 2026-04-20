import express from "express";
import { home } from "../controllers/home.js";

import { saveContact } from "../controllers/contact.js"; // New Import

const route = express.Router();

route.get('/',home);
route.post('/contact', saveContact); // The "Action" for your button
export default route;

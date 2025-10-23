import express, { Router } from "express";
import guestRegistryDB from "../database/database";

const router: Router = express.Router();

router.get("/guests", (req, res) => {
    console.log('======================== Route');
    console.log(guestRegistryDB.isOpen);
    console.log('========================');
    res.json({ message: "Guest routes working!" });
})

export default router;
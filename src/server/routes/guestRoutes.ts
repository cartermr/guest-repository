import express, { Router, Request, Response } from "express";
import guestRegistryDB from "../database/database";

const router: Router = express.Router();

router.get("/guest", (req: Request, res: Response) => {
    res.json({ message: "Guest routes working!" });
})

router.get('/guest/:id', (req: Request, res: Response) => {
    const guestId = req.params.id;
    // Fetch guest details from the database using guestId
    res.json({ message: `Fetching details for guest with ID: ${guestId}` });
})

export default router;
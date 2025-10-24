import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/guest", (req: Request, res: Response) => {
    res.json({ message: "Guest routes working!" });
})

router.get('/guest/:id', (req: Request, res: Response) => {
    const guestId = req.params.id;
    // Fetch guest details from the database using guestId
    res.json({ message: `Fetching details for guest with ID: ${guestId}` });
})

router.get('/guest/:id/checkout', (req: Request, res: Response) => {
    const guestId = req.params.id;
    // Handle guest checkout logic here
    res.json({ message: `Checking out guest with ID: ${guestId}` });
})

router.post('/guest', (req: Request, res: Response) => {
    const guestData = req.body;
    // Save guestData to the database
    res.status(201).json({ message: "Guest created successfully", data: guestData });
})

export default router;
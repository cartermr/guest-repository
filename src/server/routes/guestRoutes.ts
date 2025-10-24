import express, { Router, Request, Response } from "express";
import guestServices from "../services/GuestServices";

const router: Router = express.Router();

router.get("/guest", (req: Request, res: Response) => {
    const guests = guestServices.allGuests();
    res.json(guests);
})

router.get('/guest/:id', (req: Request, res: Response) => {
    const guestId = req.params.id;
    const guest = guestServices.getGuestByVisitorId(parseInt(guestId));
    res.json(guest);
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
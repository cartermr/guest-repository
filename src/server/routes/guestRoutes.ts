import express, { Router, Request, Response } from "express";
import guestServices from "../services/GuestServices";

const router: Router = express.Router();

// Get all guests
router.get("/guest", (req: Request, res: Response) => {
    const guests = guestServices.allGuests();
    res.json(guests);
})

// Get guest by Visitor ID
router.get('/guest/:visitorid', (req: Request, res: Response) => {
    const visitorId = req.params.visitorid;
    const guest = guestServices.getGuestByVisitorId(parseInt(visitorId));
    res.json(guest);
})

// Get Guest by ID
router.get('/guest/id/:id', (req: Request, res: Response) => {
    const guestId = req.params.id;
    const guest = guestServices.getGuestById(parseInt(guestId));
    res.json(guest);
})

// Check out guest by ID
router.get('/guest/:id/checkout', (req: Request, res: Response) => {
    const guestId = req.params.id;
    guestServices.checkOutGuest(parseInt(guestId));
    res.json({ message: `Guest with ID: ${guestId} checked out successfully` });
})

// Is Guest on Site
router.get('/guest/:id/onsite', (req: Request, res: Response) => {
    const guestId = req.params.id;
    const guest = guestServices.getGuestOnSiteByVisitorId(parseInt(guestId));
    res.json(guest);
})

// Create new guest
router.post('/guest', (req: Request, res: Response) => {
    const guestData = req.body;
    // Save guestData to the database
    res.status(201).json({ message: "Guest created successfully", data: guestData });
})

export default router;
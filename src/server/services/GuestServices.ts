import { StatementResultingChanges, SQLOutputValue } from 'node:sqlite'
import guestRegistryDB from "../database/database";

interface Guest {
    id: number;
    visitorid: number;
    firstname: string;
    lastname: string;
    company?: string;
    phone?: string;
    email: string;
    onsite: number;
    checkInTime: string;
    checkOutTime?: string;
}

const addSampleGuest = (visitorid: number, firstname: string, lastname: string, company: string, phone: string, email: string, onsite: number, checkInTime: string, checkOutTime: string | null): StatementResultingChanges => guestRegistryDB.prepare("INSERT INTO guests (visitorid, firstname, lastname, company, phone, email, onsite, checkInTime, checkOutTime) VALUES (?,?,?,?,?,?,?,?,?)").run(visitorid, firstname, lastname, company, phone, email, onsite, checkInTime, checkOutTime);

const newGuest = (visitorid: number, firstname: string, lastname: string, company: string, phone: string, email: string): StatementResultingChanges => guestRegistryDB.prepare("INSERT INTO guests (visitorid, firstname, lastname, company, phone, email, onsite) VALUES (?,?,?,?,?,?,1)").run(visitorid, firstname, lastname, company, phone, email);

const checkOutGuest = (id: number): StatementResultingChanges => guestRegistryDB.prepare("UPDATE guests SET onsite = 0, checkOutTime = CURRENT_TIMESTAMP WHERE id = ?").run(id);

const allGuests = (): Guest[] => guestRegistryDB.prepare("SELECT * FROM guests").all() as unknown as Guest[];

const getGuestById = (id: number) => guestRegistryDB.prepare("SELECT * FROM guests WHERE id = ?").get(id);

const getGuestByVisitorId = (visitorid: number) => guestRegistryDB.prepare("SELECT * FROM guests WHERE visitorid = ?").get(visitorid);

const getGuestsOnSite = () => guestRegistryDB.prepare("SELECT * FROM guests WHERE onsite = 1").all();

const getGuestOnSiteByVisitorId = (visitorid: number) => guestRegistryDB.prepare("SELECT * FROM guests WHERE visitorid = ? AND onsite = 1").get(visitorid);

const visitorIdInUse = (visitorid: number): boolean => {
    const result: Record<string, SQLOutputValue> | undefined = guestRegistryDB.prepare("SELECT COUNT(*) as count FROM guests WHERE visitorid = ?").get(visitorid);

    if (result && result.count as number > 0) {
        return true;
    }

    return false;
}

export default {
    addSampleGuest,
    newGuest,
    checkOutGuest,
    allGuests,
    getGuestById,
    getGuestByVisitorId,
    getGuestsOnSite,
    getGuestOnSiteByVisitorId,
    visitorIdInUse
};
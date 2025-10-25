import guestRegistryDB from './database'
import GuestServices from '../services/GuestServices'

const sample_data = [
    {
        visitorid: 1,
        firstname: 'John',
        lastname: 'Smith',
        company: 'Acme Corp',
        phone: '555-0101',
        email: 'john.smith@acmecorp.com',
        onsite: 1,
        checkInTime: '2024-10-24 09:15:00',
        checkOutTime: null
    },
    {
        visitorid: 1,
        firstname: 'John',
        lastname: 'Smith',
        company: 'Acme Corp',
        phone: '555-0101',
        email: 'john.smith.previous@acmecorp.com',
        onsite: 0,
        checkInTime: '2024-10-22 14:30:00',
        checkOutTime: '2024-10-22 16:45:00'
    },
    {
        visitorid: 2,
        firstname: 'Sarah',
        lastname: 'Johnson',
        company: 'Tech Solutions Inc',
        phone: '555-0102',
        email: 'sarah.johnson@techsolutions.com',
        onsite: 0,
        checkInTime: '2024-10-23 08:30:00',
        checkOutTime: '2024-10-23 17:45:00'
    },
    {
        visitorid: 3,
        firstname: 'Michael',
        lastname: 'Davis',
        company: 'Global Enterprises',
        phone: '555-0103',
        email: 'michael.davis@globalent.com',
        onsite: 1,
        checkInTime: '2024-10-24 10:22:00',
        checkOutTime: null
    },
    {
        visitorid: 3,
        firstname: 'Michael',
        lastname: 'Davis',
        company: 'Global Enterprises',
        phone: '555-0103',
        email: 'michael.davis.old@globalent.com',
        onsite: 0,
        checkInTime: '2024-10-21 09:00:00',
        checkOutTime: '2024-10-21 12:30:00'
    },
    {
        visitorid: 4,
        firstname: 'Emily',
        lastname: 'Brown',
        company: 'Innovation Labs',
        phone: '555-0104',
        email: 'emily.brown@innovlabs.com',
        onsite: 0,
        checkInTime: '2024-10-23 14:15:00',
        checkOutTime: '2024-10-23 16:30:00'
    },
    {
        visitorid: 5,
        firstname: 'David',
        lastname: 'Wilson',
        company: 'Future Systems',
        phone: '555-0105',
        email: 'david.wilson@futuresys.com',
        onsite: 1,
        checkInTime: '2024-10-24 11:45:00',
        checkOutTime: null
    },
    {
        visitorid: 6,
        firstname: 'Lisa',
        lastname: 'Anderson',
        company: 'Digital Solutions',
        phone: '555-0106',
        email: 'lisa.anderson@digitalsol.com',
        onsite: 0,
        checkInTime: '2024-10-24 07:00:00',
        checkOutTime: '2024-10-24 15:20:00'
    },
    {
        visitorid: 7,
        firstname: 'Robert',
        lastname: 'Martinez',
        company: 'Consulting Group',
        phone: '555-0107',
        email: 'robert.martinez@consultgrp.com',
        onsite: 1,
        checkInTime: '2024-10-24 13:10:00',
        checkOutTime: null
    },
    {
        visitorid: 8,
        firstname: 'Jennifer',
        lastname: 'Taylor',
        company: 'Strategic Partners',
        phone: '555-0108',
        email: 'jennifer.taylor@stratpartners.com',
        onsite: 0,
        checkInTime: '2024-10-23 09:45:00',
        checkOutTime: '2024-10-23 12:15:00'
    },
    {
        visitorid: 9,
        firstname: 'Alex',
        lastname: 'Thompson',
        company: 'Creative Agency',
        phone: '555-0109',
        email: 'alex.thompson@creativeagency.com',
        onsite: 1,
        checkInTime: '2024-10-24 08:00:00',
        checkOutTime: null
    },
    {
        visitorid: 10,
        firstname: 'Maria',
        lastname: 'Rodriguez',
        company: 'Tech Innovations',
        phone: '555-0110',
        email: 'maria.rodriguez@techinnovations.com',
        onsite: 0,
        checkInTime: '2024-10-22 10:15:00',
        checkOutTime: '2024-10-22 18:30:00'
    }
]

guestRegistryDB.initializeDatabase()

for (const guest of sample_data) {
    GuestServices.addSampleGuest(guest.visitorid, guest.firstname, guest.lastname, guest.company, guest.phone, guest.email, guest.onsite, guest.checkInTime, guest.checkOutTime)
}
import { RequestHandler } from "express";
import { BookingRequest, BookingResponse } from "@shared/api";

// In-memory storage for bookings (in production, use a database)
const bookings = new Map<
  string,
  {
    ticketId: string;
    bookingReference: string;
    flightNumber: string;
    from: string;
    to: string;
    passengerName: string;
    status: string;
    email?: string;
  }
>();

// Generate random IDs
function generateId(prefix: string): string {
  return prefix + Math.random().toString(36).substring(2, 10).toUpperCase();
}

export const handleBooking: RequestHandler = (req, res) => {
  try {
    const { flightNumber, from, to, passengerName } = req.body as BookingRequest;

    // Validation
    if (!flightNumber || !from || !to || !passengerName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      } as BookingResponse);
    }

    // Generate ticket and booking reference
    const ticketId = generateId("TKT");
    const bookingReference = generateId("BR");

    // Store booking
    bookings.set(ticketId, {
      ticketId,
      bookingReference,
      flightNumber,
      from,
      to,
      passengerName,
      status: "Confirmed",
    });

    res.json({
      success: true,
      message: `Ticket booked successfully for ${passengerName}!`,
      ticketId,
      bookingReference,
    } as BookingResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error processing booking",
    } as BookingResponse);
  }
};

export function getBooking(ticketId: string, bookingReference: string) {
  const booking = bookings.get(ticketId);
  if (booking && booking.bookingReference === bookingReference) {
    return booking;
  }
  return null;
}

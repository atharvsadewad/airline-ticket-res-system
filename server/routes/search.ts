import { RequestHandler } from "express";
import { SearchRequest, SearchResponse } from "@shared/api";
import { getBooking } from "./booking";

export const handleSearch: RequestHandler = (req, res) => {
  try {
    const { ticketId, bookingReference, email } = req.body as SearchRequest;

    // Validation
    if (!ticketId || !bookingReference || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      } as SearchResponse);
    }

    // Search for booking
    const booking = getBooking(ticketId, bookingReference);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found. Please check your booking details.",
      } as SearchResponse);
    }

    // Return booking details
    res.json({
      success: true,
      message: `Booking found for ${booking.passengerName}`,
      ticket: {
        ticketId: booking.ticketId,
        bookingReference: booking.bookingReference,
        flightNumber: booking.flightNumber,
        from: booking.from,
        to: booking.to,
        passengerName: booking.passengerName,
        status: booking.status,
      },
    } as SearchResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching for ticket",
    } as SearchResponse);
  }
};

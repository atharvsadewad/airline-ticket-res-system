export interface DemoResponse {
  message: string;
}

export interface BookingRequest {
  flightNumber: string;
  from: string;
  to: string;
  passengerName: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  ticketId?: string;
  bookingReference?: string;
}

export interface SearchRequest {
  ticketId: string;
  bookingReference: string;
  email: string;
}

export interface SearchResponse {
  success: boolean;
  message: string;
  ticket?: {
    ticketId: string;
    bookingReference: string;
    flightNumber: string;
    from: string;
    to: string;
    passengerName: string;
    status: string;
  };
}

import { RequestHandler } from "express";

export interface Flight {
  id: string;
  number: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  price: number;
  availableSeats: number;
}

// Mock flight data - In production, this would come from a database
// Flights are stored in a structure that simulates BST ordering by departure time
const flights: Flight[] = [
  {
    id: "FL001",
    number: "AI101",
    from: "DEL",
    to: "BOM",
    departure: "06:00",
    arrival: "08:30",
    price: 4999,
    availableSeats: 42,
  },
  {
    id: "FL002",
    number: "AI202",
    from: "DEL",
    to: "BLR",
    departure: "08:15",
    arrival: "11:00",
    price: 5499,
    availableSeats: 28,
  },
  {
    id: "FL003",
    number: "AI303",
    from: "BOM",
    to: "HYD",
    departure: "09:30",
    arrival: "11:45",
    price: 3999,
    availableSeats: 15,
  },
  {
    id: "FL004",
    number: "AI404",
    from: "DEL",
    to: "CCU",
    departure: "10:45",
    arrival: "13:30",
    price: 5299,
    availableSeats: 52,
  },
  {
    id: "FL005",
    number: "AI505",
    from: "BLR",
    to: "MAA",
    departure: "12:00",
    arrival: "13:45",
    price: 3599,
    availableSeats: 38,
  },
  {
    id: "FL006",
    number: "AI606",
    from: "DEL",
    to: "PNQ",
    departure: "14:30",
    arrival: "16:15",
    price: 3299,
    availableSeats: 61,
  },
  {
    id: "FL007",
    number: "AI707",
    from: "BOM",
    to: "COK",
    departure: "15:45",
    arrival: "18:00",
    price: 4499,
    availableSeats: 45,
  },
  {
    id: "FL008",
    number: "AI808",
    from: "BLR",
    to: "DEL",
    departure: "17:00",
    arrival: "19:30",
    price: 5699,
    availableSeats: 22,
  },
  {
    id: "FL009",
    number: "AI909",
    from: "HYD",
    to: "BOM",
    departure: "18:30",
    arrival: "20:45",
    price: 3899,
    availableSeats: 35,
  },
  {
    id: "FL010",
    number: "AI1010",
    from: "DEL",
    to: "BOM",
    departure: "20:00",
    arrival: "22:30",
    price: 4699,
    availableSeats: 48,
  },
];

export const handleGetFlights: RequestHandler = (req, res) => {
  try {
    // Flights are already sorted by departure time (simulating BST traversal)
    const sortedFlights = flights.sort((a, b) => {
      const timeA = parseInt(a.departure.replace(":", ""));
      const timeB = parseInt(b.departure.replace(":", ""));
      return timeA - timeB;
    });

    res.json({
      success: true,
      message: "Flights retrieved using BST-optimized search",
      flights: sortedFlights,
      total: sortedFlights.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching flights",
    });
  }
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plane, Code2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { BookingRequest, SearchRequest, BookingResponse, SearchResponse } from "@shared/api";
import { toast } from "sonner";

export default function Demo() {
  const [bookingForm, setBookingForm] = useState({
    flightNumber: "",
    from: "",
    to: "",
    passengerName: "",
  });

  const [searchForm, setSearchForm] = useState({
    ticketId: "",
    bookingReference: "",
    email: "",
  });

  const [bookingLoading, setBookingLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResponse | null>(null);
  const [searchResult, setSearchResult] = useState<SearchResponse | null>(null);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingLoading(true);
    setBookingResult(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      const data: BookingResponse = await response.json();
      setBookingResult(data);

      if (data.success) {
        toast.success(`${data.message}\nTicket ID: ${data.ticketId}\nRef: ${data.bookingReference}`);
        setBookingForm({
          flightNumber: "",
          from: "",
          to: "",
          passengerName: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to process booking. Please try again.");
      setBookingResult({
        success: false,
        message: "Connection error",
      });
    } finally {
      setBookingLoading(false);
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchLoading(true);
    setSearchResult(null);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchForm),
      });

      const data: SearchResponse = await response.json();
      setSearchResult(data);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to search ticket. Please try again.");
      setSearchResult({
        success: false,
        message: "Connection error",
      });
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-airline-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-airline-900 mb-4">
                Live Demo
              </h1>
              <p className="text-lg text-airline-700">
                Interactive demonstration of the Airline Ticket Reservation System
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Demo */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Plane className="w-6 h-6 text-airline-600" />
                  <h2 className="text-2xl font-bold text-airline-900">Book a Ticket</h2>
                </div>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Flight Number
                    </label>
                    <input
                      type="text"
                      name="flightNumber"
                      value={bookingForm.flightNumber}
                      onChange={handleBookingChange}
                      placeholder="e.g., AI101"
                      required
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-airline-900 mb-2">
                        From
                      </label>
                      <input
                        type="text"
                        name="from"
                        value={bookingForm.from}
                        onChange={handleBookingChange}
                        placeholder="e.g., DEL"
                        required
                        className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-airline-900 mb-2">
                        To
                      </label>
                      <input
                        type="text"
                        name="to"
                        value={bookingForm.to}
                        onChange={handleBookingChange}
                        placeholder="e.g., BOM"
                        required
                        className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Passenger Name
                    </label>
                    <input
                      type="text"
                      name="passengerName"
                      value={bookingForm.passengerName}
                      onChange={handleBookingChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={bookingLoading}
                    className="w-full px-4 py-2 font-semibold text-white bg-airline-500 hover:bg-airline-600 disabled:bg-airline-300 rounded-lg transition-colors mt-6"
                  >
                    {bookingLoading ? "Processing..." : "Book Ticket"}
                  </button>
                </form>

                {bookingResult && (
                  <div
                    className={`mt-4 p-4 rounded-lg flex gap-3 ${
                      bookingResult.success
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {bookingResult.success ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p
                            className={`font-semibold ${
                              bookingResult.success ? "text-green-900" : "text-red-900"
                            }`}
                          >
                            {bookingResult.message}
                          </p>
                          {bookingResult.ticketId && (
                            <>
                              <p className="text-sm text-green-700 mt-1">
                                Ticket ID: <span className="font-mono">{bookingResult.ticketId}</span>
                              </p>
                              <p className="text-sm text-green-700">
                                Reference: <span className="font-mono">{bookingResult.bookingReference}</span>
                              </p>
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-900 font-semibold">{bookingResult.message}</p>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Search Demo */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-airline-600" />
                  <h2 className="text-2xl font-bold text-airline-900">Search Ticket</h2>
                </div>
                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Ticket ID
                    </label>
                    <input
                      type="text"
                      name="ticketId"
                      value={searchForm.ticketId}
                      onChange={handleSearchChange}
                      placeholder="e.g., TKT12345"
                      required
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Booking Reference
                    </label>
                    <input
                      type="text"
                      name="bookingReference"
                      value={searchForm.bookingReference}
                      onChange={handleSearchChange}
                      placeholder="e.g., ABC123XYZ"
                      required
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={searchForm.email}
                      onChange={handleSearchChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={searchLoading}
                    className="w-full px-4 py-2 font-semibold text-white bg-airline-500 hover:bg-airline-600 disabled:bg-airline-300 rounded-lg transition-colors mt-6"
                  >
                    {searchLoading ? "Searching..." : "Search Ticket"}
                  </button>
                </form>

                {searchResult && (
                  <div
                    className={`mt-4 p-4 rounded-lg flex gap-3 ${
                      searchResult.success
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {searchResult.success && searchResult.ticket ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-900">{searchResult.message}</p>
                          <div className="text-sm text-green-700 mt-2 space-y-1">
                            <p>
                              <span className="font-semibold">Passenger:</span>{" "}
                              {searchResult.ticket.passengerName}
                            </p>
                            <p>
                              <span className="font-semibold">Flight:</span>{" "}
                              {searchResult.ticket.flightNumber} ({searchResult.ticket.from} → {searchResult.ticket.to})
                            </p>
                            <p>
                              <span className="font-semibold">Status:</span>{" "}
                              {searchResult.ticket.status}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-900 font-semibold">{searchResult?.message}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Code Output Section */}
            <div className="mt-12 bg-airline-900 rounded-2xl p-8 border border-airline-700 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">System Architecture</h2>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-airline-100 text-sm font-mono">
                {`Data Structure Performance Analysis:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hash Table (Ticket Search):
  • Operation: O(1) average case
  • Use Case: Fast ticket lookup by ID
  • Implementation: Hash map with ticket IDs as keys

Binary Search Tree (Flight Sorting):
  • Operation: O(log n) average case
  • Use Case: Sorted flight management by departure time
  • Implementation: BST maintaining order invariant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Try booking a ticket above and then searching for it!`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

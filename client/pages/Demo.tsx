import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plane, Code2 } from "lucide-react";

export default function Demo() {
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
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Flight Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., AI101"
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
                        placeholder="e.g., DEL"
                        className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-airline-900 mb-2">
                        To
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., BOM"
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
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full px-4 py-2 font-semibold text-white bg-airline-500 hover:bg-airline-600 rounded-lg transition-colors mt-6">
                    Book Ticket
                  </button>
                </div>
              </div>

              {/* Search Demo */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-airline-600" />
                  <h2 className="text-2xl font-bold text-airline-900">Search Ticket</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Ticket ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., TKT12345"
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Booking Reference
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., ABC123XYZ"
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full px-4 py-2 font-semibold text-white bg-airline-500 hover:bg-airline-600 rounded-lg transition-colors mt-6">
                    Search Ticket
                  </button>
                </div>
              </div>
            </div>

            {/* Code Output Section */}
            <div className="mt-12 bg-airline-900 rounded-2xl p-8 border border-airline-700 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Sample Output</h2>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-airline-100 text-sm font-mono">
                {`Hash Table Search Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ticket ID: TKT12345
Status: O(1) search completed in 0.001ms
Result: Found in hash table

Binary Search Tree Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Flight: AI101
Departure: 14:30 (Sorted by BST)
Status: O(log n) lookup completed in 0.003ms
Result: Flight found at tree node`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

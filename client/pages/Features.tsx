import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Search, Plane, Lock, Zap, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-airline-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-airline-900 mb-4">
                Features
              </h1>
              <p className="text-lg text-airline-700">
                Comprehensive features designed for efficient airline ticket management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <BookOpen className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Fast Booking</h3>
                <p className="text-airline-700 leading-relaxed">
                  Reserve tickets in seconds with our optimized booking engine powered by efficient data structures.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <Search className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Instant Search</h3>
                <p className="text-airline-700 leading-relaxed">
                  Find tickets instantly using hash-based search with O(1) average time complexity.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <Plane className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Flight Sorting</h3>
                <p className="text-airline-700 leading-relaxed">
                  View flights sorted by departure time using BST-based efficient ordering.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <Lock className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Secure Booking</h3>
                <p className="text-airline-700 leading-relaxed">
                  Enterprise-grade security for all your ticket reservations and personal information.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <Zap className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Real-Time Updates</h3>
                <p className="text-airline-700 leading-relaxed">
                  Get instant notifications for flight status and booking confirmations.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <BarChart3 className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Analytics</h3>
                <p className="text-airline-700 leading-relaxed">
                  Track booking trends and manage your flight preferences with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

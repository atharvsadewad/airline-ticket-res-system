import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Search, Plane, Hash, TreePine, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-airline-50 via-white to-airline-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-airline-200 rounded-full opacity-20 -top-20 -right-20 blur-3xl"></div>
            <div className="absolute w-96 h-96 bg-airline-300 rounded-full opacity-20 -bottom-20 -left-20 blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-airline-900 leading-tight mb-6">
                  Airline Ticket Reservation System
                </h1>
                <p className="text-lg md:text-xl text-airline-700 mb-8 leading-relaxed">
                  Efficient airline booking system using Hashing and BST for optimized ticket search and flight management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-airline-500 hover:bg-airline-600 rounded-lg transition-all transform hover:scale-105"
                  >
                    View Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center justify-center px-8 py-3 font-semibold text-airline-600 bg-airline-100 hover:bg-airline-200 rounded-lg transition-all"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-airline-300 to-airline-500 opacity-10 blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-airline-100 to-airline-200 rounded-3xl p-8 shadow-2xl border border-airline-200">
                    <Plane className="w-32 h-32 text-airline-500 mx-auto animate-bounce" />
                    <p className="text-center text-airline-700 font-semibold mt-4">
                      Flight Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-airline-50 to-airline-100 rounded-2xl p-8 md:p-12 border border-airline-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-airline-900 mb-6">
                Problem Statement
              </h2>
              <p className="text-lg text-airline-700 leading-relaxed mb-4">
                To manage airline tickets and flight schedules efficiently using advanced data structures. This system addresses the challenge of handling large volumes of ticket bookings and flight information with minimal latency and maximum throughput.
              </p>
              <p className="text-lg text-airline-700 leading-relaxed">
                By leveraging Hash Tables for rapid ticket lookups and Binary Search Trees for sorted flight management, we achieve O(1) average-case ticket search and O(log n) flight operations, ensuring scalability and performance for a production-grade reservation system.
              </p>
            </div>
          </div>
        </section>

        {/* Data Structures Section */}
        <section className="py-16 md:py-24 bg-airline-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-airline-900 text-center mb-12">
              Data Structures Used
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hash Table Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-airline-100 hover:shadow-2xl hover:border-airline-300 transition-all transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <Hash className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-2xl font-bold text-airline-900 mb-4">Hash Table</h3>
                <p className="text-airline-700 leading-relaxed mb-6">
                  Enables fast ticket search and retrieval with O(1) average time complexity. Perfect for instant booking lookups and ticket validation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">Rapid ticket search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">O(1) lookup time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">Efficient booking management</span>
                  </li>
                </ul>
              </div>

              {/* BST Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-airline-100 hover:shadow-2xl hover:border-airline-300 transition-all transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mb-6">
                  <TreePine className="w-8 h-8 text-airline-600" />
                </div>
                <h3 className="text-2xl font-bold text-airline-900 mb-4">Binary Search Tree</h3>
                <p className="text-airline-700 leading-relaxed mb-6">
                  Maintains sorted order of flights by departure time with O(log n) insertion and search. Enables efficient range queries and sorted traversals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">Sorted flight ordering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">O(log n) operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-airline-200 text-airline-700 font-semibold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-airline-700">Range query support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-airline-900 text-center mb-12">
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Ticket */}
              <div className="bg-gradient-to-br from-white to-airline-50 rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-airline-500 text-white mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Book Ticket</h3>
                <p className="text-airline-700 leading-relaxed">
                  Seamless ticket booking experience with real-time availability checks and instant confirmation.
                </p>
              </div>

              {/* Search Ticket */}
              <div className="bg-gradient-to-br from-white to-airline-50 rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-airline-500 text-white mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">Search Ticket</h3>
                <p className="text-airline-700 leading-relaxed">
                  Lightning-fast ticket search using advanced hashing algorithms for instant results.
                </p>
              </div>

              {/* View Flights */}
              <div className="bg-gradient-to-br from-white to-airline-50 rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-airline-500 text-white mb-6">
                  <Plane className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-airline-900 mb-3">View Next Flights</h3>
                <p className="text-airline-700 leading-relaxed">
                  Browse upcoming flights sorted by departure time with complete details and pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 md:py-24 bg-airline-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-airline-900 text-center mb-12">
              Live Demo
            </h2>

            <div className="bg-white rounded-2xl p-8 md:p-12 border border-airline-200 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-airline-100 to-airline-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Plane className="w-16 h-16 text-airline-400 mx-auto mb-4 opacity-50" />
                  <p className="text-airline-700 font-semibold mb-4">
                    Interactive Demo Coming Soon
                  </p>
                  <p className="text-airline-600 text-sm max-w-md">
                    Experience the Airline Ticket Reservation System with live demonstrations of booking, searching, and flight management features.
                  </p>
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-2 text-airline-600 font-semibold hover:text-airline-700 transition-colors"
                  >
                    View Full Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-airline-900 text-center mb-12">
              Development Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-airline-50 to-white rounded-2xl p-8 border border-airline-100 shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-airline-200 mx-auto mb-4">
                    <Users className="w-10 h-10 text-airline-600" />
                  </div>
                  <h3 className="text-lg font-bold text-airline-900 mb-1">Team Member {i}</h3>
                  <p className="text-airline-600 text-sm mb-3">Roll No: 00{i}</p>
                  <p className="text-airline-700 text-sm">
                    BTech Computer Science & Engineering
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-airline-100 to-airline-200 rounded-2xl p-8 border border-airline-300 shadow-lg max-w-md w-full text-center">
                <h3 className="text-xl font-bold text-airline-900 mb-3">Institution</h3>
                <p className="text-airline-700 font-semibold mb-2">
                  MIT ADT University
                </p>
                <p className="text-airline-600 text-sm">Pune, India</p>
                <p className="text-airline-600 text-sm mt-2">
                  Data Structures and Algorithms Project 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-airline-600 to-airline-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-lg text-airline-100 mb-8">
              Discover how our efficient reservation system works with optimized data structures.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-airline-600 bg-white hover:bg-airline-50 rounded-lg transition-all transform hover:scale-105"
            >
              View Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

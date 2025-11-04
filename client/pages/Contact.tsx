import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-airline-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-airline-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-airline-700 max-w-2xl mx-auto">
                Have questions about our Airline Ticket Reservation System? We'd love to hear from
                you. Reach out to us using the form below or contact us directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Email */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mx-auto mb-4">
                  <Mail className="w-7 h-7 text-airline-600" />
                </div>
                <h3 className="text-lg font-bold text-airline-900 mb-2">Email</h3>
                <a
                  href="mailto:info@airreserve.com"
                  className="text-airline-600 hover:text-airline-700 transition-colors"
                >
                  info@airreserve.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mx-auto mb-4">
                  <Phone className="w-7 h-7 text-airline-600" />
                </div>
                <h3 className="text-lg font-bold text-airline-900 mb-2">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-airline-600 hover:text-airline-700 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-airline-100 mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-airline-600" />
                </div>
                <h3 className="text-lg font-bold text-airline-900 mb-2">Location</h3>
                <p className="text-airline-600">
                  MIT ADT University
                  <br />
                  Pune, India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-airline-100 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-airline-900 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-airline-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-airline-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Project Inquiry"
                    className="w-full px-4 py-3 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-airline-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-airline-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airline-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold text-white bg-airline-500 hover:bg-airline-600 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

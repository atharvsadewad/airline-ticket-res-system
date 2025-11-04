import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Mail, Github, LinkedinIcon } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Team Member 1",
      rollNo: "001",
      role: "System Design Lead",
      email: "member1@example.com",
      specialization: "Data Structures & Algorithms",
    },
    {
      name: "Team Member 2",
      rollNo: "002",
      role: "Implementation Lead",
      email: "member2@example.com",
      specialization: "Backend Development",
    },
    {
      name: "Team Member 3",
      rollNo: "003",
      role: "Frontend Lead",
      email: "member3@example.com",
      specialization: "UI/UX Development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-airline-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-airline-900 mb-4">
                Our Team
              </h1>
              <p className="text-lg text-airline-700 max-w-2xl mx-auto">
                Dedicated BTech students from MIT ADT University working on advanced data structures
                and algorithms for airline ticket management.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-airline-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-airline-400 to-airline-600 mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-airline-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-airline-600 text-center text-sm mb-3">Roll No: {member.rollNo}</p>
                  <p className="text-airline-700 font-semibold text-center mb-4">{member.role}</p>
                  <p className="text-airline-600 text-center text-sm mb-6">
                    {member.specialization}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-airline-100 text-airline-600 hover:bg-airline-200 hover:text-airline-700 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-airline-100 text-airline-600 hover:bg-airline-200 hover:text-airline-700 transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-airline-100 text-airline-600 hover:bg-airline-200 hover:text-airline-700 transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Institution Info */}
            <div className="bg-gradient-to-br from-airline-100 to-airline-200 rounded-2xl p-12 border border-airline-300 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-airline-900 mb-4">Institution</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-airline-900 mb-2">
                    MIT ADT University
                  </h3>
                  <p className="text-airline-700 mb-4">
                    Marathwada Institute of Technology
                    <br />
                    Aurangabad, and Dr. Vishwanath Karad
                  </p>
                  <div className="space-y-2 text-airline-700 text-sm">
                    <p>
                      <span className="font-semibold">Location:</span> Pune, India
                    </p>
                    <p>
                      <span className="font-semibold">Department:</span> Computer Science &
                      Engineering
                    </p>
                    <p>
                      <span className="font-semibold">Program:</span> BTech (4 Years)
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-airline-900 mb-2">Project Details</h3>
                  <p className="text-airline-700 mb-4">
                    Data Structures and Algorithms (DSA) Course Project
                  </p>
                  <div className="space-y-2 text-airline-700 text-sm">
                    <p>
                      <span className="font-semibold">Subject:</span> DSA (Data Structures &
                      Algorithms)
                    </p>
                    <p>
                      <span className="font-semibold">Focus:</span> Hash Tables & BST
                    </p>
                    <p>
                      <span className="font-semibold">Year:</span> 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-airline-300">
                <p className="text-center text-airline-700 italic">
                  "Empowering future engineers through quality education and practical learning"
                </p>
              </div>
            </div>

            {/* Acknowledgments */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-airline-900 mb-6">Acknowledgments</h2>
              <p className="text-airline-700 max-w-2xl mx-auto mb-4">
                We would like to express our gratitude to our faculty advisors, course instructors,
                and the MIT ADT University for providing the opportunity to work on this comprehensive
                project.
              </p>
              <p className="text-airline-600 text-sm">
                Made with dedication for DSA Jury 2025 | © 2025 AirReserve Team
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

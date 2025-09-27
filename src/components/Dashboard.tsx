import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Permission } from "../types/roles";
import InvitationManagement from "./admin/InvitationManagement";

// Sub-dashboards
import StudentDashboard from "./dashboard/StudentDashboard";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

export default function Dashboard() {
  const { user, loading, signOut, hasPermission, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  // Handlers passed to children
  const handleSubjectClick = (subject: string) => {
    alert(`Viewing details for ${subject}`);
  };

  const handleDownloadResults = () => {
    alert("Downloading result PDF...");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-[#003d69] text-white">
        <div className="h-16 flex items-center justify-center font-bold text-lg bg-[#56225e]">
          ElBethel Academy
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === "overview"
                ? "bg-[#ffb607] text-white"
                : "hover:bg-[#56225e]"
            }`}
          >
            Overview
          </button>
          {isAdmin && hasPermission(Permission.INVITE_USERS) && (
            <button
              onClick={() => setActiveTab("invitations")}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === "invitations"
                  ? "bg-[#ffb607] text-white"
                  : "hover:bg-[#56225e]"
              }`}
            >
              User Invitations
            </button>
          )}
        </nav>
        <button
          onClick={handleSignOut}
          className="m-4 bg-[#ffb607] hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Sign Out
        </button>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-bold text-gray-900">
            Welcome, {user.name}
          </h1>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
            {user.role.replace("_", " ").toUpperCase()}
          </span>
        </nav>

        {/* Content */}
        <main className="flex-1 p-6">
          {activeTab === "invitations" &&
          isAdmin &&
          hasPermission(Permission.INVITE_USERS) ? (
            <InvitationManagement />
          ) : (
            <>
              {/* User Info */}
              <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#003d69] mb-4">
                  User Information
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-medium text-gray-500">Name</dt>
                    <dd>{user.name}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Email</dt>
                    <dd>{user.email}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Role</dt>
                    <dd className="capitalize">{user.role}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Status</dt>
                    <dd>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Role-specific dashboards */}
              {user.role === "student" && (
                <StudentDashboard
                  className="JSS2A"
                  subjects={["Mathematics", "English", "Basic Science"]}
                  results={[
                    {
                      subject: "Mathematics",
                      ca1: 10,
                      ca2: 12,
                      midterm: 18,
                      ca4: 15,
                      exam: 60,
                      total: 115,
                      grade: "A",
                    },
                  ]}
                  resultsReleased={false} // change to true to release
                  onSubjectClick={handleSubjectClick}
                  onDownloadResults={handleDownloadResults}
                />
              )}

              {user.role === "teacher" && <TeacherDashboard />}

              {isAdmin && <AdminDashboard />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

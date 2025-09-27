import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-md font-semibold text-[#56225e] mb-3">Admin Panel</h4>
        <p className="text-sm text-gray-600">
          Full access to: Users, Classes, Subjects, Fees, Approvals, and Reports.
        </p>
      </div>
    </div>
  );
}

import React from "react";

interface DashboardProps {
  role: "student" | "teacher" | "admin";
}

export default function Dashboard({ role }: DashboardProps) {
  return (
    <div>
      <h1>Dashboard - {role}</h1>
    </div>
  );
}

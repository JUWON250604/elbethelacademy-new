import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/student" element={<Dashboard role="student" />} />
        <Route path="/dashboard/teacher" element={<Dashboard role="teacher" />} />
        <Route path="/dashboard/admin" element={<Dashboard role="admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

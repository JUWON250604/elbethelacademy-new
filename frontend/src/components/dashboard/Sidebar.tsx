type SidebarProps = {
  role: "student" | "teacher" | "admin";
};

export default function Sidebar({ role }: SidebarProps) {
  return (
    <aside className="w-64 bg-blue-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">El Bethel</h1>
      <ul className="space-y-4">
        <li>🏠 Home</li>
        {role === "student" && <li>📚 My Courses</li>}
        {role === "teacher" && <li>📝 Manage Classes</li>}
        {role === "admin" && <li>⚙️ User Management</li>}
      </ul>
    </aside>
  );
}
 

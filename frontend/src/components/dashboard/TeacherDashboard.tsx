export default function TeacherDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Class Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Student Name</th>
            <th className="border border-gray-300 p-2">Subject</th>
            <th className="border border-gray-300 p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">John Doe</td>
            <td className="border border-gray-300 p-2">Mathematics</td>
            <td className="border border-gray-300 p-2">85</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Jane Smith</td>
            <td className="border border-gray-300 p-2">English</td>
            <td className="border border-gray-300 p-2">90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
 

export default function StudentDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold">Mathematics</h3>
          <p>See assignments, scores, and remarks</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold">English</h3>
          <p>See assignments, scores, and remarks</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold">Science</h3>
          <p>See assignments, scores, and remarks</p>
        </div>
      </div>
    </div>
  );
}

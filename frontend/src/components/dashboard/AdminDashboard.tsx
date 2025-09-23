export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">System Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold">Total Students</h3>
          <p className="text-3xl font-bold">350</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold">Total Teachers</h3>
          <p className="text-3xl font-bold">25</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold">Classes</h3>
          <p className="text-3xl font-bold">15</p>
        </div>
      </div>
    </div>
  );
}
 

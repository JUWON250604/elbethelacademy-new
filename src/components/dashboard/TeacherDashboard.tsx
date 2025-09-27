import React, { useState } from "react";

type Student = {
  id: number;
  name: string;
  subjects: string[];
  resultsReleased: boolean;
};

const classes = [
  {
    id: 1,
    name: "JSS1A",
    students: [
      { id: 1, name: "Daniel James", subjects: ["Math", "English"], resultsReleased: false },
      { id: 2, name: "Sarah Musa", subjects: ["Math", "English"], resultsReleased: false },
    ],
  },
  {
    id: 2,
    name: "JSS2A",
    students: [
      { id: 3, name: "Michael Obi", subjects: ["Math", "Science"], resultsReleased: false },
      { id: 4, name: "Aisha Bello", subjects: ["Math", "Science"], resultsReleased: false },
    ],
  },
];

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleGradeSubmit = (student: Student) => {
    alert(`Grades saved for ${student.name}`);
    // 👇 After saving, return to student list (stay inside the class)
    setSelectedStudent(null);
  };

  const handleReleaseResults = (student: Student) => {
    student.resultsReleased = true; // in real app, update backend
    alert(`Results released for ${student.name}`);
    setSelectedStudent(null); // after releasing, return to student list
  };

  const goBack = () => {
    if (selectedStudent) {
      // If inside student grading, go back to student list
      setSelectedStudent(null);
    } else if (selectedClass) {
      // If inside a class, go back to class list
      setSelectedClass(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h4 className="text-md font-semibold text-[#56225e] mb-4">
        Teacher Panel
      </h4>

      {/* Back button when inside class or student */}
      {(selectedClass || selectedStudent) && (
        <button
          onClick={goBack}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
        >
          ← Back
        </button>
      )}

      {/* Step 1: Show class list */}
      {!selectedClass && !selectedStudent && (
        <>
          <h5 className="text-sm font-semibold text-gray-700 mb-2">Your Classes</h5>
          <ul className="space-y-2">
            {classes.map((cls) => (
              <li
                key={cls.id}
                className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedClass(cls.id)}
              >
                {cls.name}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Step 2: Show students in class */}
      {selectedClass && !selectedStudent && (
        <>
          <h5 className="text-sm font-semibold text-gray-700 mb-2">Students</h5>
          <ul className="space-y-2">
            {classes
              .find((cls) => cls.id === selectedClass)
              ?.students.map((student) => (
                <li
                  key={student.id}
                  className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedStudent(student)}
                >
                  {student.name}
                </li>
              ))}
          </ul>
        </>
      )}

      {/* Step 3: Show student grading form */}
      {selectedStudent && (
        <div className="mt-4 space-y-4">
          <h5 className="text-sm font-semibold text-gray-700 mb-2">
            Grading: {selectedStudent.name}
          </h5>

          {selectedStudent.subjects.map((subject, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-2">
              <label className="block font-medium text-gray-700">{subject}</label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="CA1"
                  className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  placeholder="CA2"
                  className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  placeholder="Midterm"
                  className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  placeholder="Exam"
                  className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          ))}

          <div className="flex space-x-3">
            <button
              onClick={() => handleGradeSubmit(selectedStudent)}
              className="px-4 py-2 bg-[#56225e] hover:bg-[#3d1a46] text-white rounded-lg"
            >
              Save Grades
            </button>
            <button
              onClick={() => handleReleaseResults(selectedStudent)}
              disabled={selectedStudent.resultsReleased}
              className={`px-4 py-2 rounded-lg ${
                selectedStudent.resultsReleased
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#ffb607] hover:bg-yellow-600 text-white"
              }`}
            >
              {selectedStudent.resultsReleased
                ? "Results Released"
                : "Release Results"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

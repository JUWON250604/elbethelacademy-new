import React from "react";

type Result = {
  subject: string;
  ca1: number;
  ca2: number;
  midterm: number;
  ca4: number;
  exam: number;
  total: number;
  grade: string;
};

type Props = {
  className: string;
  subjects: string[];
  results?: Result[];
  resultsReleased: boolean;
  onSubjectClick: (subject: string) => void;
  onDownloadResults: () => void;
};

export default function StudentDashboard({
  className,
  subjects,
  results,
  resultsReleased,
  onSubjectClick,
  onDownloadResults,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Class + Subjects */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-md font-semibold text-[#56225e] mb-3">
          My Class & Subjects
        </h4>
        <p className="text-sm text-gray-600 mb-2">📘 Class: {className}</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          {subjects.map((s, i) => (
            <li key={i}>
              <button
                onClick={() => onSubjectClick(s)}
                className="text-blue-600 hover:underline"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-md font-semibold text-[#ffb607]">My Results</h4>
          {resultsReleased && (
            <button
              onClick={onDownloadResults}
              className="px-3 py-1 bg-[#ffb607] text-white rounded-md text-sm hover:bg-yellow-600"
            >
              Download PDF
            </button>
          )}
        </div>

        {!resultsReleased ? (
          <p className="text-red-500">Results have not been released yet.</p>
        ) : (
          <table className="w-full text-sm border">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Subject</th>
                <th>CA1</th>
                <th>CA2</th>
                <th>Midterm</th>
                <th>CA4</th>
                <th>Exam</th>
                <th>Total</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {results?.map((r, index) => (
                <tr key={index}>
                  <td>{r.subject}</td>
                  <td>{r.ca1}</td>
                  <td>{r.ca2}</td>
                  <td>{r.midterm}</td>
                  <td>{r.ca4}</td>
                  <td>{r.exam}</td>
                  <td>{r.total}</td>
                  <td>{r.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

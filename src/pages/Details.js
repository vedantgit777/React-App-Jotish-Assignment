import { useLocation, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;

  // Safety check (if user refreshes page directly)
  if (!item) {
    return (
      <div className="container">
        <h2>No Data Found</h2>
        <button onClick={() => navigate("/list")}>Go Back</button>
      </div>
    );
  }

  const city = item[2]; // city
  const chartData = [
    {
      name: item[1],
      salary: Number(item[3]),
    },
  ];

  return (
    <div className="container">
      <h2>Job Details</h2>

      {/* Back Button */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>

      {/* Job Info Card */}
      <div className="card">
        <p><strong>Job Title:</strong> {item[1]}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Salary:</strong> {item[3]}</p>
        <p><strong>Date:</strong> {item[4]}</p>
      </div>

      {/* Salary Chart */}
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Salary Chart
      </h3>

      <BarChart
        width={500}
        height={300}
        data={chartData}
        style={{ margin: "auto" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="salary" fill="#667eea" />
      </BarChart>

      {/* Google Map */}
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        City Location Map
      </h3>

      <div style={{ marginTop: "20px" }}>
        <iframe
          title="city-map"
          width="100%"
          height="300"
          style={{ borderRadius: "10px" }}
          src={`https://www.google.com/maps?q=${city}&output=embed`}
        ></iframe>
      </div>
            {/* Capture Photo Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => navigate("/photo")}>
          Capture Photo
        </button>
      </div>
    </div>
  );
}

export default Details;
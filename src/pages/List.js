import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  axios.post(
    "https://backend.jotish.in/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456",
    }
  )
    .then((response) => {
      console.log("Full Response:", response.data);

      // 👇 Correct extraction
      setData(response.data.TABLE_DATA.data);
    })
    .catch((error) => {
      console.log("API Error:", error);
    });
}, []);

 return (
  <div className="container">
    <h2>Job List</h2>

    {data.map((item, index) => (
      <div
        key={index}
        className="card"
        onClick={() =>
          navigate(`/details/${index}`, { state: item })
        }
      >
        {item[1]}
      </div>
    ))}
  </div>
);
}

export default List;
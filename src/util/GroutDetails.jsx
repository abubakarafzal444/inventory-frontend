import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GroutDetails = () => {
  const [groutDetail, setGroutDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:9000/grout-detail/${params.ItemCode}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setGroutDetail(res.data.data);
      })
      .catch((err) => alert("There was an error"));
  }, []);

  return (
    <div>
      <p>{groutDetail.Name}</p>
    </div>
  );
};

export default GroutDetails;

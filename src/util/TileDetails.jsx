import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TileDetails = () => {
  const [tileDetail, setTileDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:9000/tile-detail/${params.ItemCode}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTileDetail(res.data.data);
      })
      .catch((err) => alert("There was an error"));
  }, []);

  return (
    <div>
      <p>{tileDetail.Name}</p>
    </div>
  );
};

export default TileDetails;

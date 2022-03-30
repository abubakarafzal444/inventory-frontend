import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/login`}>
            <Button>login</Button>
          </Link>
        </li>
        <li>
          <Link to={`/add-user`}>
            <Button>add user</Button>
          </Link>
        </li>
        <li>
          <Link to={`/all-tiles`}>
            <Button>all tiles</Button>
          </Link>
        </li>
        <li>
          <Link to={`/all-grouts`}>
            <Button>all grouts</Button>
          </Link>
        </li>
        <li>
          <Link to={`/add-tile`}>
            <Button>add tile</Button>
          </Link>
        </li>
        <li>
          <Link to={`/add-grout`}>
            <Button>add grout</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;

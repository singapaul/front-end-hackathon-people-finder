import React from "react";
import "./Search.scss";
import { InputLabel, Button } from '@mui/material';
import Dropdown from "./Dropdown";

const Search = () => {
  return <div className="search">
    <div className="search-container">
        <div className="tabs">
            <Button variant="contained" style={{
                borderRadius: 22,
                padding: "7px 15px",
                backgroundColor: "#81D8F7",
                color: "#4185C5",
                }}>DEVS</Button>
            <Button variant="contained" style={{
                borderRadius: 22,
                padding: "7px 15px",
                backgroundColor: "#81D8F7",
                color: "#4185C5",
                }}>BUSINESS</Button>
        </div>
        <div className="form">
            <Dropdown name="Industry" items={["Pharmaceutical", "Education", "Financial"]}/>
            <Dropdown name="Language" items={["Javascript", "Python", "C#"]}/>
            <Dropdown name="Language library - optional" items={["React", "Django", "ASP.NET"]}/>
            <Dropdown name="Experience (years)" items={["0-1", "2-4", "5-6", "6+"]}/>
        </div>
        <Button variant="contained" style={{
                borderRadius: 22,
                padding: "7px 15px",
                backgroundColor: "#81D8F7",
                color: "#4185C5",
                }}>Search</Button>
    </div>
  </div>
};

export default Search;

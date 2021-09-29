import React, { useState } from "react";
import "./Style.css";
import Card from "@mui/material/Card";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CardContent from "@mui/material/CardContent";
import ArticleIcon from "@mui/icons-material/Article";
import { Avatar, IconButton, Pagination, Typography } from "@mui/material";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const onShowGrid = () => {
    setActive(true);
  }

  return (
    <div className="sidebar">
      {/* user greeting box */}
      <Card className="sidebar_card">
        <Avatar/>
        <CardContent>
          <h4>Hi, Readers</h4>
          <h5>Here's your news !</h5>
        </CardContent>
      </Card>
      {/* toggle box */}
      <Card className="sidebar_togglebox">
          <Typography variant="h6">View Toggle</Typography>
        <div className="sidebar_togglebtn">
          <IconButton>
            <ArticleIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <FormatListBulletedIcon fontSize="large"/>
          </IconButton>
        </div>
      </Card>
      {/* feedback box */}
      <Card className="sidebar_feedbox">
        <Typography variant='h5'>Have a Feedback?</Typography>
        <input placeholder="We're Listening" className="sidebar_input"/>
      </Card>

      {/* <Pagination/> */}
    </div>
  );
};

export default Sidebar;

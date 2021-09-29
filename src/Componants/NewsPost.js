import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Pagination,
  PaginationItem,
} from "@mui/material";
// import {Link, Route, MemoryRouter} from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const NewsPost = (props) => {
  const { title, body } = props.data;
  const [hide, setHide] = useState(true);

  const removePost = () => {
    setHide(false);
  };
  console.log(hide);

  return (
    <div className="newspost">
      {/* <h1>News Feed...</h1> */}
      <div className="newspost_cards">
        <div className={` ${hide === false ? "hidePost" : "newsCards "}`}>
          <Card sx={{ maxWidth: 550 }} className="newspost_card">
            <Avatar className="newspost_avtar" />
            <CardContent className="newspost_content">
              <h4>{title}</h4>
              <h6>{body}</h6>
            </CardContent>
          </Card>
          <IconButton
            sx={{ background: "#fff" }}
            onClick={removePost}
            className="hideIcon"
          >
            <CloseIcon color="warning" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;

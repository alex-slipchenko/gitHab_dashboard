import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SkeletonRepos from "../Skeleton/SkeletonRepos";
import { useSelector, useDispatch } from "react-redux";
import { idUser } from "../../store/HomeSlice/slice";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Repositories() {
  const { repositories, reposIsloading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.getItem("id")) {
  //     localStorage.removeItem("id");
  //   }
  // }, []);
  const setValueId = (id) => {
    // localStorage.setItem("id", `${id}`);

    dispatch(idUser(id));
  };
  return repositories.length ? (
    <div className="container__user">
      {repositories.map((item, index) => (
        <Card className="cart__user" key={index}>
          <CardMedia
            sx={{ height: 70 }}
            image={item.owner.avatar_url}
            title={item.name}
            className="cart__img"
          />
          <CardContent className="cart__content" sx={{ padding: 0 }}>
            <Typography gutterBottom component="div">
              {item.name}
            </Typography>
            <Typography color="text.secondary">{item.description}</Typography>
          </CardContent>
          <CardActions className="cart__button" sx={{ padding: 0 }}>
            <Button
              component={Link}
              to="/repository"
              onClick={() => setValueId(item.id)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  ) : reposIsloading ? (
    <div className="container__user">
      <SkeletonRepos />
    </div>
  ) : null;
}

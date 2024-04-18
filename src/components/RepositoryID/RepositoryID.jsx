import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import FaceIcon from "@mui/icons-material/Face";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import thunks from "../../store/HomeSlice/thunks";
import SkeletonCart from "../Skeleton/SkeletonKart";
import "./style.css";
import { Link } from "react-router-dom";

export default function RepositorryId() {
  const { setId, cartBox, cartLoading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (localStorage.getItem("id")) {
    //   const userString = localStorage.getItem("id");
    //   const user = JSON.parse(userString);
    //   dispatch(thunks.getCart(user));
    // }
    dispatch(thunks.getCart(setId));
  }, []);

  return Object.keys(cartBox).length ? (
    <Card sx={{ maxWidth: 345 }} className="Cart">
      <CardMedia
        sx={{ height: 140 }}
        image={cartBox.owner.avatar_url}
        title={cartBox.name}
      />
      <CardContent className="cartContent" sx={{ pl: "20px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {cartBox.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cartBox.description}
        </Typography>

        <Typography component="div">
          <StarIcon fontSize="inherit" color="#757575" />
          {cartBox.stargazers_count}
        </Typography>
        <Typography component="div">
          <PeopleIcon /> {cartBox.subscribers_count}{" "}
        </Typography>
        <Typography component="div">
          <FaceIcon />
          {cartBox.watchers_count}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: "20px" }}>
        <Button
          size="small"
          component={Link}
          to={cartBox.html_url}
          target="_blank"
        >
          Go to githab
        </Button>
      </CardActions>
    </Card>
  ) : cartLoading ? (
    <SkeletonCart />
  ) : null;
}

import * as React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: "  #290bea",
      color: "white",
      svg: { color: "white" },
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  // console.info(event.target);
}

const nav = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "/battle",
    element: "Battle",
  },
];

export default function Navigate() {
  return (
    <header>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          {nav.map((item, index) => (
            <StyledBreadcrumb
              className={"item__li"}
              key={index}
              component={NavLink}
              to={item.path}
              label={item.element}
              icon={index === 0 ? <HomeIcon fontSize="small" /> : null}
            />
          ))}
        </Breadcrumbs>
      </div>
    </header>
  );
}

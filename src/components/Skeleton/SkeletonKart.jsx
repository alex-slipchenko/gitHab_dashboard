import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonCart() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={345} height={140} />
      <Skeleton variant="rectangular" width={110} height={30} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={345} />

      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="circular" width={20} height={20} />

      <Skeleton variant="rounded" width={50} height={20} />
    </Stack>
  );
}

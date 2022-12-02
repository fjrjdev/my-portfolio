import { styled } from "@/styles/stitches.config";

export const StyledDiv = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "1.5rem",
  "@mobile": {
    flexDirection: "column",
  },
});

import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function Iconify({ icon, sx, width, height, ...other }) {
  const theme = useTheme();
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ ...sx, color: sx?.color ?? theme.palette?.icon?.main }}
      {...other}
    />
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, useTheme } from "@mui/material";

export default function Home() {
  // const theme = useTheme();
  return (
    <div>
      home page
      <Box>
        <Button variant="contained" color="primary">
          buton
        </Button>
      </Box>
    </div>
  );
}

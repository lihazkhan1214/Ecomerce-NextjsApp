import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      home page
      <Box>
        <Button variant="contained" color="success">
          buton
        </Button>
      </Box>
    </div>
  );
}

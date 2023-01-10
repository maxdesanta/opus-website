import React from "react";
import Box from "@mui/material/Box";
import ImportantUrgentCard from "../Components/Card/ImportanUrgent/ImportantUrgentCard";
import ImportantUrgentDisplay from "../Components/Card/ImportanUrgent/ImportantUrgentDisplay";

export default function Home({children}) {
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 10}}>
        <ImportantUrgentCard />
        <ImportantUrgentDisplay />
      </Box>
    </Box>
  );
}

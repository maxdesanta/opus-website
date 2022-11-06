import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function ImportantUrgentAdd() {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "card.main1",
          borderRadius: "20px",
          pt: 1,
          pb: 2,
          px: 2,
          width: "300px",
        }}
      >
        <CardContent>
          <Grid container>
            <Grid
              item
              md={12}
              sx={{ borderBottom: "1px solid #ffffff", pb: 1.5 }}
            >
              <Typography
                variant="h6"
                sx={{ color: "fontColor.main", fontWeight: "600" }}
              >
                Important Urgent
              </Typography>
            </Grid>
            <Grid item md={12} sx={{ pt: 5 }}>
                <InputLabel sx={{ color: "fontColor.main", fontSize: "1.4em" }}>What's your plan?</InputLabel>
                  <Input type="text" fullWidth disableUnderline sx={{ color: "fontColor.main", pt: 1.5, borderBottom: "1px solid #ffffff" }} />
                <Typography variant="caption" sx={{color: "fontColor.main"}}>50 Characters Remaining</Typography>          
            </Grid>
            <Grid container spacing={2} sx={{pt: 5}}>
              <Grid item md={6}>
                <Box sx={{backgroundColor:"fontColor.main", display: "flex", flexDirection: "column", alignItems: "center", padding: 1.2, borderRadius:"10px" }}>
                  <CalendarMonthOutlinedIcon fontSize="large"  />
                  <Typography sx={{fontSize: "12px", fontWeight: 600}}>Oct 6, 2022</Typography>
                  <Typography sx={{fontSize: "12px", fontWeight: 600}}>11:02 AM</Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{backgroundColor:"fontColor.main", display: "flex", flexDirection: "column", alignItems: "center", padding: 1.2, borderRadius:"10px"}}>
                  <CalendarMonthOutlinedIcon fontSize="large" />
                  <Typography sx={{fontSize: "12px"}}>Notification : ON</Typography>
                </Box>
              </Grid>    
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddIcon />}
            sx={{ color: "card.main1", backgroundColor: "#ffffff" }}
          >
            Add new task
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

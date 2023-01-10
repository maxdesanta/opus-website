import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import MUI
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

// import datetimepicker
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// icon MUI
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function ImportantUrgentAdd() {
  // router
  const navigate = useNavigate();

  // lengt text usestate
  const [count, setCount] = useState(50);
  const [limit, setLimit] = useState(50);
  const [value, setValue] = useState(dayjs("2022-04-07"));

  // length text function
  const change = (e) => {
    let convert = e.target.value.length;
    let result = limit - convert;

    setCount(result);
  };

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
          height: "auto",
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
              <InputLabel
                sx={{ color: "fontColor.main", fontSize: "1.4em", pb: 2 }}
              >
                What's your plan?
              </InputLabel>
              <Input
                type="text"
                fullWidth
                onChange={change}
                disableUnderline
                placeholder="Text"
                inputProps={{ maxLength: 50 }}
                sx={{
                  color: "fontColor.main",
                  border: "1px solid white",
                  borderRadius: "5px",
                  py: 0.5,
                  px: 3,
                  mb: 1,
                }}
              />
              <Typography variant="caption" sx={{ color: "fontColor.main" }}>
                {count} Characters Remaining
              </Typography>
            </Grid>
            <Grid item md={12} sx={{ pt: 2 }}>
              <InputLabel
                sx={{ color: "fontColor.main", fontSize: "1.4em", pb: 2 }}
              >
                Notes
              </InputLabel>
              <Input
                type="text"
                fullWidth
                disableUnderline
                placeholder="Text"
                sx={{
                  color: "fontColor.main",
                  border: "1px solid white",
                  borderRadius: "5px",
                  py: 0.5,
                  px: 3,
                  mb: 1,
                }}
              />
            </Grid>
            <Grid item md={12} sx={{ pt: 2 }}>
              <InputLabel
                sx={{ color: "fontColor.main", fontSize: "1.4em", pb: 2 }}
              >
                Due
              </InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  value={value}
                  components={{
                    OpenPickerIcon: CalendarMonthOutlinedIcon,
                  }}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  InputProps={{
                    sx: {
                      "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.8)" }, "& .MuiInputBase-input": { color: "white", py: 1.5, px: 3}, "& .MuiOutlinedInput-notchedOutline": {border: "1px solid white"}} }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center" spacing={4} sx={{ pt: 31.5 }}>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  color: "card.main1",
                  backgroundColor: "#ffffff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                startIcon={<ArrowBackRoundedIcon />}
                sx={{
                  color: "card.main1",
                  backgroundColor: "#ffffff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}

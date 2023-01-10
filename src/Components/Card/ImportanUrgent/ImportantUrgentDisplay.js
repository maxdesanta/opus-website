// component MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// icon MUI
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ImportantUrgentDisplay() {
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
            <Grid item>
              <Typography
                variant="h6"
                sx={{ color: "fontColor.main", fontWeight: "600", pb: 1.5 }}
              >
                Important Urgent
              </Typography>
            </Grid>
            <Grid item md={11.5}>
              <Typography sx={{ color: "fontColor.main" }}>Due</Typography>
            </Grid>
            <Grid item md={0.5}>
              <Typography sx={{ color: "fontColor.main" }}>0</Typography>
            </Grid>
            <Grid
              item
              md={11.5}
              sx={{ borderBottom: "1px solid #ffffff", pb: 1.5, mb: 3 }}
            >
              <Typography sx={{ color: "fontColor.main" }}>Overdue</Typography>
            </Grid>
            <Grid item md={0.4}>
              <Typography
                sx={{
                  color: "fontColor.main",
                  borderBottom: "1px solid #ffffff",
                  pb: 2,
                  mb: 3,
                }}
              >
                0
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                overflowY: "scroll",
                height: "540px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}>
              <Grid item sx={{ mx: "auto", pb: 1 }}>
                <Box
                  sx={{ backgroundColor: "white", borderRadius: 3, padding: 2, cursor: "pointer" }}
                >
                  <Grid container>
                    <Grid item>
                      <Typography sx={{ fontWeight: 600 }}>
                        Bermain mobile legends bersama atasan
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ pt: 2, pb: 1 }}
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Oct 5, 2022
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          22:24 PM
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "40px" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        backgroundColor: "rgba(217, 217, 217, 0.15)",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                        width: "70px",
                        textAlign: "center",
                        py: 0.5,
                        ml: "auto",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Due
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item sx={{ mx: "auto", pb: 1 }}>
                <Box
                  sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
                >
                  <Grid container>
                    <Grid item>
                      <Typography sx={{ fontWeight: 600 }}>
                        Bermain mobile legends bersama atasan
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ pt: 2, pb: 1 }}
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Oct 5, 2022
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          22:24 PM
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "40px" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        backgroundColor: "rgba(217, 217, 217, 0.15)",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                        width: "70px",
                        textAlign: "center",
                        py: 0.5,
                        ml: "auto",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Overdue
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item sx={{ mx: "auto", pb: 1 }}>
                <Box
                  sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
                >
                  <Grid container>
                    <Grid item>
                      <Typography sx={{ fontWeight: 600 }}>
                        Bermain mobile legends bersama atasan
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ pt: 2, pb: 1 }}
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Oct 5, 2022
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          22:24 PM
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
                        <CheckCircleIcon
                          sx={{ fontSize: "40px", color: "#64AFF9"}}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        backgroundColor: "rgba(217, 217, 217, 0.15)",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                        width: "70px",
                        textAlign: "center",
                        py: 0.5,
                        ml: "auto",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Done
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item sx={{ mx: "auto", pb: 1 }}>
                <Box
                  sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
                >
                  <Grid container>
                    <Grid item>
                      <Typography sx={{ fontWeight: 600 }}>
                        Bermain mobile legends bersama atasan
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ pt: 2, pb: 1 }}
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Oct 5, 2022
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          22:24 PM
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "40px" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        backgroundColor: "rgba(217, 217, 217, 0.15)",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                        width: "70px",
                        textAlign: "center",
                        py: 0.5,
                        ml: "auto",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Due
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item sx={{ mx: "auto", pb: 1 }}>
                <Box
                  sx={{ backgroundColor: "white", borderRadius: 3, padding: 2 }}
                >
                  <Grid container>
                    <Grid item>
                      <Typography sx={{ fontWeight: 600 }}>
                        Bermain mobile legends bersama atasan
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ pt: 2, pb: 1 }}
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Oct 5, 2022
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          22:24 PM
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "40px" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        backgroundColor: "rgba(217, 217, 217, 0.15)",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                        width: "70px",
                        textAlign: "center",
                        py: 0.5,
                        ml: "auto",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                        Due
                      </Typography>
                    </Grid>
                  </Grid>
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
            sx={{
              color: "card.main1",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
          >
            Add new task
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

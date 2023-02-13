import { Grid } from "@mui/material";
// SideBar
export default function Layout({ children }) {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={2} sx={{ backgroundColor: "yellow" }} >
        {/*All Components in side bar goes here*/}
        <p>I am side bar</p>
      </Grid>

      <Grid item xs={10} sx={{backgroundColor:'blue'}}>
        {children}
      </Grid>
    </Grid>
  );
}

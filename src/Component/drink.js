import { useContext, createContext, useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  slider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(2),
    justifyContent: "flex-end",
    textAlign: "center",
    paddingBottom: theme.spacing(2),
    backgroundColor: "white",
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  label: {
    textTransform: "none",
  },
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
    direction: "row",
    margin: "auto",
    marginBottom: theme.spacing(2),
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  button: {
    padding: "5%",
    "&:hover": {
      color: "#4f25c8",
    },
  },
}));
export default function Food() {
  const classes = styles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("  http://localhost:3333/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          {data.map((value) => (
            <Grid item key={value.name} md={3}>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    style={{
                      height: "150px",
                      margin: "auto",
                      paddingTop: "5%",
                    }}
                    component="img"
                    className={classes.media}
                    image={value.drurl}
                  />
                  <CardContent>
                    <Typography style={{ fontWeight: "bold" }}>
                      {value.drname}
                    </Typography>
                    <Typography>Harga : {value.drprice} k</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

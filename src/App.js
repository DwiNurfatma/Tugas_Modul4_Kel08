import { useContext, createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import foodImage from "./images/makanan.jpg";
import drinkImage from "./images/minuman.jpg";

const styles = makeStyles((theme) => ({
  menu: {
    display: "flex",
  },
  food: {
    margin: "auto",
    marginBottom: "20px",
    textAlign: "center",
  },
  container: {
    marginTop: "0px",
  }
}));
const themes = {
  light: {
    background: "#f0e6f7",
    color: "#330852",
  },
  dark: {
    background: "#575256",
    color: "white",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();
  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background}}>
        <Grid container spacing={3}>
          <Grid item md={6} style={{ textAlign:"center" }}>
            <input
              onChange={(event) => handleIdPembelian(event, "name")}
              name="idPembelian"
              value={valueInput.name}
              style={{ color: "#6e0234", padding: "5px" }}
              placeholder="Masukkan Nama"
            />
          </Grid>
          <Grid item md={6} style={{ textAlign:"center" }}>
            <Button
              style={{ color: valueTheme.color, fontWeight: "bold" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              change body theme
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: valueTheme.background }}>
        <div className="container">          
          <h3 style={{ color: valueTheme.color, fontWeight: "bold" }}>
            <marquee>Welcome {valueInput.name}</marquee>
          </h3>
        </div>
        <div className={classes.menu}>
          <div className={classes.food}>
            <h3 style={{ color: valueTheme.color, fontWeight: "bold" }}>
              Makanan
            </h3>
            <Link to="/makanan" className={classes.link}>
              <img src={foodImage} style={{ height: "300px" }} />
            </Link>
          </div>
          <div className={classes.food}>
            <h3 style={{ color: valueTheme.color, fontWeight: "bold" }}>
              Minuman
            </h3>
            <Link to="/minuman" className={classes.link}>
              <img src={drinkImage} style={{ height: "300px" }} />
            </Link>
          </div>
        </div>
        <h3>
          <marquee
            style={{
              marginBottom: "90px",
              marginTop: "50px",
              color: valueTheme.color,
            }}
          >
            Warung Makan IF8
          </marquee>
        </h3>
      </div>
    </ThemeContext.Provider>
  );
}

import React, { Fragment } from "react";
import style from "./style.css";
class Kasir extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      food: [
        ["Salad", 15],
        ["Carbonara", 20],
        ["Marry Chicken", 25],
        ["Mac and Cheese", 20],
        ["Casava Chips", 10],
        ["Toast", 20],
        ["Waffle", 20],
        ["Omelete", 15],
      ],
      drink: [
        ["Lemon Squash", 10],
        ["Strawberry MilkShake", 15],
        ["Choco Avocado", 15],
        ["Mango Juice", 10],
        ["Melon Squash", 10],
        ["Thai Tea", 10],
        ["Lemon Mojito", 15],
        ["Boba Tea", 10],
        ["Ice Code Latte", 10],
      ],
      menu: {
        menu1: 0,
        menu2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { menu1, menu2 } = this.state.menu;
    var total = menu1 + menu2;
    this.setState({
      ...this.state.menu,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { menu } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        menu: {
          ...menu,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const { drink, food, totalTagihan } = this.state;
    return (
      <>
        <div className="body">
          <h2
            style={{
              textAlign: "center",
              marginTop: "0px",
              padding: "50px",
            }}
          >
            Daftar Pesanan
          </h2>
          <div style={{ marginTop: "150px", marginLeft: "530px" }}>
            <select
              onChange={this.handleChangeStuff}
              name="menu1"
              style={{
                cursor: "pointer",
                width: "200px",
                padding: "5px",
              }}
            >
              <option value="0">Makanan</option>
              <Fragment>
                {food.map((makanan) => {
                  return <option value={makanan[1]}>{makanan[0]}</option>;
                })}
              </Fragment>
            </select>
            <h3 style={{ marginTop: "0px", marginLeft: "300px" }}>
              Total Belanjaan: Rp {totalTagihan} K
            </h3>
          </div>
          <div style={{ marginTop: "200px", marginLeft: "530px" }}>
            <select
              onChange={this.handleChangeStuff}
              name="menu2"
              style={{
                cursor: "pointer",
                width: "200px",
                padding: "5px",
              }}
            >
              <option value="0">Minuman</option>
              <Fragment>
                {drink.map((makanan) => {
                  return <option value={makanan[1]}>{makanan[0]}</option>;
                })}
              </Fragment>
            </select>
          </div>
        </div>
      </>
    );
  }
}

export default Kasir;

import React, { Fragment } from "react";

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
    const { menu1, menu2} = this.state.menu;
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
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <h2>Daftar Pesanan</h2>
                <br />
                <select
                  onChange={this.handleChangeStuff}
                  name="menu1"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">Makanan</option>
                  <Fragment>
                    {food.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
                <select
                  onChange={this.handleChangeStuff}
                  name="menu2"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">Minuman</option>
                  <Fragment>
                    {drink.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
              
           
                <h5>Total Belanjaan: Rp {totalTagihan} K</h5>
              </div>
              <h2
                style={{
                  color: "#6e0234",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                }}
              >
                Silakan Bayar: Rp {totalTagihan} K
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Kasir;

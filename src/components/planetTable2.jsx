import "./PlanetTable2.css";

function PlanetTable() {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr className="table-head">
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">
              Mass (10<sup>24</sup> kg)
            </th>
            <th scope="col">Diameter (km)</th>
            <th scope="col">
              Density (kg/m<sup>3</sup>)
            </th>
            <th scope="col">
              Gravity (m/s<sup>2</sup>)
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="row-white">
            <th
              rowSpan="4"
              colSpan="2"
              scope="rowgroup"
              className="terrestrial"
            >
              Terrestrial Planets
            </th>
            <th scope="row">Mercury</th>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr className="row-light">
            <th scope="row">Venus</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
            <td>8.9</td>
          </tr>

          <tr className="row-white">
            <th scope="row">Earth</th>
            <td>5.97</td>
            <td>12,756</td>
            <td>5514</td>
            <td>9.8</td>
          </tr>

          <tr className="row-light">
            <th scope="row">Mars</th>
            <td>0.642</td>
            <td>6,792</td>
            <td>3933</td>
            <td>3.7</td>
          </tr>

          <tr className="row-white">
            <th rowSpan="4" scope="rowgroup" className="jovian">
              Jovian Planets
            </th>
            <th rowSpan="2" scope="rowgroup" className="gas">
              Gas Giants
            </th>
            <th scope="row">Jupiter</th>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
          </tr>

          <tr className="row-light">
            <th scope="row">Saturn</th>
            <td>568</td>
            <td>120,536</td>
            <td>687</td>
            <td>9.0</td>
          </tr>

          <tr className="row-white">
            <th rowSpan="2" scope="rowgroup" className="ice">
              Ice Giants
            </th>
            <th scope="row">Uranus</th>
            <td>86.8</td>
            <td>51,118</td>
            <td>1271</td>
            <td>8.7</td>
          </tr>

          <tr className="row-light">
            <th scope="row">Neptune</th>
            <td>102</td>
            <td>49,528</td>
            <td>1638</td>
            <td>11.0</td>
          </tr>

          <tr className="row-white">
            <th
              rowSpan="1"
              colSpan="2"
              scope="rowgroup"
              className="dwarf"
            >
              Dwarf Planets
            </th>
            <th scope="row">Pluto</th>
            <td>0.0146</td>
            <td>2,370</td>
            <td>2095</td>
            <td>0.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;
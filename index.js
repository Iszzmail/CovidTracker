import ReactDOM from "react-dom";
import "./style.css";
import Card from "./card";
import React, { useEffect, useState } from "react";
import Table from "./table";

function Index() {
  const [totalResponse, SetTotalResponse] = useState();
  const [confirmedCases, SetconfirmedCases] = useState("loading");
  const [activeCases, Setactivecases] = useState("loading");
  const [datafilterByDate, SetdatafilterByDate] = useState();
  const[byDistrict,SetbyDistrict]=useState()

  const get = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let total = response.data;
        SetTotalResponse(total);

        SetconfirmedCases(
          total.reduce((a, b) => {
            return a + b.summary.total;
          }, 0)
        );

        Setactivecases(
          total.reduce((a, b) => {
            return a + b.summary.confirmedCasesIndian;
          }, 0)
        );
      
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const getDate = (e) => {
    
    SetdatafilterByDate(
      totalResponse &&totalResponse.filter((x) => {
        if (x.day.includes(e.target.value)) {
          return true;
        } else {
          return;
        }
      })
    );
    SetbyDistrict(datafilterByDate)
   
  };

  useEffect(() => {
    get();
  }, []);

 


  return (
    <div>
      <div className="head">
        <img
          className="icon"
          src="https://covid19.karnataka.gov.in/assets/1200-px-seal-of-karnataka-svg.png"
        ></img>
        <div className="headerchild">Government of india</div>
        <div className="headerchild1">Covid 19 Dashboard</div>
      </div>
      <div>
        Sort by year
        <select onChange={getDate}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <Card total={confirmedCases} name={"Total"} />
      <Card total={activeCases} name="active" />
      
      <Table filteredbydate={datafilterByDate} />
    </div>
  );
}

export default Index;

ReactDOM.render(<Index />, document.querySelector("#root"));

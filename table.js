import React, { useState } from "react";
import "./style.css";

function Table(props) {
  let district = {};
  let fdis = [];

  props.filteredbydate &&
    props.filteredbydate.map((e) => {
      e.regional.map((x) => {
        if (!district[x.loc]) {
          district[x.loc] = {
            cases: x.confirmedCasesIndian,
          };
        } else {
          district[x.loc].cases =
            district[x.loc].cases + x.confirmedCasesIndian;
        }
      });
    });

  let districtsArr = Object.keys(district);
  let f = districtsArr.map((e) => district[e]);


  return (
    <div>
    
        
          <div>
            <table>
              <thead>
                <tr>
                  <th>State</th>
                  <th>Product Category</th>
                  <th>Unit Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              
              {districtsArr.map((e) => {
                  return <tbody>
                  <td>{e}</td>
                  <td>{district[e].cases}</td>
              </tbody>
               })};
        s
            </table>
          </div>
      
    </div>
  );
}

export default Table;

{
  /* {JSON.stringify(props.filteredbydate)} */
}

{
  /* <td>{obj.totalConfirmed}</td>
 <td>{obj.confirmedCasesIndian}</td>
 <td>{obj.discharged}</td>
 <td>{obj.deaths}</td> */
}

//  [Andaman and Nicobar Islands: {state: 'Andaman and Nicobar Islands', confirmedCases: 4945, death: 62},
// Andhra Pradesh: {state: 'Andhra Pradesh', confirmedCases: 882286, death: 7108},
// Arunachal Pradesh: {state: 'Arunachal Pradesh', confirmedCases: 16719, death: 56},
// Assam: {state: 'Assam', confirmedCases: 216211, death: 1045},
// Bihar: {state: 'Bihar', confirmedCases: 251743, death: 1397},
// Bihar****: {state: 'Bihar****', confirmedCases: 715179, death: 9429},
// Chandigarh: {state: 'Chandigarh', confirmedCases: 19748, death: 317},
// Chandigarh****: {state: 'Chandigarh****', confirmedCases: 65616, death: 1076},
// Chhattisgarh: {state: 'Chhattisgarh', confirmedCases: 279575, death: 3371},
// Dadra and Nagar Haveli and Daman and Diu: {state: 'Dadra and Na,gar Haveli and Daman and Diu', confirmedCases: 3378, death: 2},
// Delhi: {state: 'Delhi', confirmedCases: 625369, death: 10536},
// Goa: {state: 'Goa', confirmedCases: 51066, death: 739},
// Goa***: {state: 'Goa***', confirmedCases: 175088, death: 3289},
// Goa*****: {state: 'Goa*****', confirmedCases: 179338, death: 3482},]

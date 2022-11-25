import React from "react";
import { useEffect, useState } from "react";

const formBuilderAPI__URL = "localhost:8080/cultural-assets/form-builder/";


export const getDepartments = () => {
  console.log("getting the deps");


  const filter = "Department";

  // // const [departments, setDepartments] = useState([]);

  // let departments = [];

  // fetch(formBuilderAPI__URL.concat(filter), {
  //     method : "GET"
  // })
  // .then(response => response.json())
  // .then(data => {
  //     console.log("this si the " + data);
  //     data.values.map ( d => {
  //         let department = {};
  //         department.name = d.name;
  //         department.value = d.id;
  //         departments = [...departments, department];
  //     })
  //     // setDepartments(deps);
  // })
  // .catch(error => console.log(error));

  return fetch(formBuilderAPI__URL.concat(filter), {
    method: "GET",
    url: `${formBuilderAPI__URL}/${filter}`
  })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("this si the " + data);
    //   data.values.map((d) => {
    //     let department = {};
    //     department.name = d.name;
    //     department.value = d.id;
    //     departments = [...departments, department];
    //   });
    //   // setDepartments(deps);
    // })
    // .catch((error) => console.log(error))
    ;
};

export default getDepartments;

// export default function GetDeps () {

//     const [departments, setDepartments] = useState([]);

//     useEffect( () => {
//         fetch(marcoAPI)
//             .then(response => response.json())
//             .then(data => {
//                 setDepartments(data.map(d => {
//                     return d.departamento;
//                 }))
//                 console.log(departments);
//             })
//             .catch(error => console.log(error));
//     }, {
//         method : "GET"
//     })

//     return departments;

// }

// export function GetMunicipalities (){
//     const filter = "Municipality";

//     const [municipalities, setMunicipalities] = useState([]);

//     useEffect( () => {
//         fetch(formBuilderAPI__URL.concat(filter))
//             .then(response => response.json())
//             .then(data => {
//                 setMunicipalities(data)
//                 console.log(municipalities);
//             })
//             .catch(error => console.log(error));
//     }, {
//         method : "GET"
//     })

//     return municipalities;
// }

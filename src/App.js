import logo from './logo.svg';
import './App.css';
import FilterElement from './components/Filters/FilterCategory/FilterElement/FilterElement';
import FilterGroup from './components/Filters/FilterGroup/FilterGroup';
import { useState } from 'react';
import Home from './pages/Home/Home';

function App() {

  const filterObjects = [
    {
      "name" : "Ubicacion",
      "sections" : [
        'Pais', 
        'Departamento',
        'Municipio'
      ],
    },{
      "name" : "Comunidad",
      "sections" : [
        'Community', 
        'Common'
      ],
    },{
      "name" : "Clasificacion",
      "sections" : [
        'Tipo', 
        'Subtipo',
        'Manifestacion',
        'Patrimonio',
        'Categoria'
      ],
    }
  ];

  const getFilterObjects = () =>{  
    return filterObjects;
  }
  

  const filterSections = ['Ubicacion', 'Categoria', 'Clasificacion'];
  const [filterParams, setFilterParams] = useState([]);

  const getFilters = () => {
    console.log(filterParams);
  }


  const addParams= (param) => {
    var jsonString = JSON.stringify(param);
    console.log(JSON.parse(jsonString));
    var matchFound = false;
    for (let index = 0; index < filterParams.length; index++) {
      if (filterParams[index].name == param.name){
          matchFound = true;
          filterParams[index].params = param.params;
          setFilterParams(filterParams);
          break;
      }    
    }
    if(!matchFound){
      filterParams.push(param);  
      setFilterParams(filterParams);
    }
    console.log(filterParams);
  }

  return (
    <div>
        <Home></Home>
        {/* <FilterGroup 
          filterObjects = {getFilterObjects()}
          onSelectFilters = {addParams}
          onApplyFilters = {getFilters}
          filterBy = {filterParams}>
        </FilterGroup> */}
    </div>
  );
}

export default App;

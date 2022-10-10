import FilterElement from "../FilterCategory/FilterElement/FilterElement";
import Button from "@mui/material/Button";
import { useState } from "react";

const FilterGroup = (props) => {
    const filterObjects = props.filterObjects;

    const applyFilters = props.onApplyFilters;

    return (
        <div>
            {/* {filterValues.map(filterValue => (
                <FilterElement name = {filterValue}></FilterElement>
            ))} */}
            <h3>Filtros</h3>
            {filterObjects.map(filterObject => (
                <FilterElement 
                    name = {filterObject.name} 
                    sections = {filterObject.sections}
                    onFormAccept = {props.onSelectFilters}>
                </FilterElement>
            ))}
            <Button onClick={applyFilters}>Aplicar Filtros</Button>
        </div>
    );
}

export default FilterGroup;
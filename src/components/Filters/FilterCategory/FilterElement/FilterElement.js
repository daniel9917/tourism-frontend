import { React, useState } from "react";
import { Box, Modal } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FilterElement = (props) => {
    const name = props.name;
    const sections = props.sections;
    // let values = getElementValues(name);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    let filtervalues = new Map();
    sections.forEach(element => {
        filtervalues.set(element.toLowerCase(), '');
    });

    const selectOnChange = (event) => {
        filtervalues.set(event.target.id, event.target.value);
    }

    const handleClick = () =>{
        var jsonData = {};
        var columnName = name;
        jsonData[columnName] =  Object.fromEntries(filtervalues);

        props.onFormAccept(
            {
                'name' : name,
                'params' : Object.fromEntries(filtervalues)
            }
        )
        // console.log( {
        //     'name' : name,
        //     'params' : Object.fromEntries(filtervalues)
        // });
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
      };

    return (
        <div>
            <p onClick={handleOpen}>{name}</p>            
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography>Filtros por {name}</Typography>
                    {sections.map(section => (
                        <div>
                            <p>{section}</p>
                            <select 
                                id={section.toLowerCase()}
                                onChange={selectOnChange}>
                                    {getElementValues(section).map(value => (
                                        <option>{value}</option>
                                    ))}
                            </select>
                        </div>
                    ))}    
                    <Button onClick={handleClick}>Select </Button>
                </Box>
            </Modal>
            {/* {sections.map(section => (
                <p>{section}</p>
            ))} */}
        </div>
    )
}


function getElementValues (name){
    return [name + ' 1', name + ' 2', name + ' 3'];
}

export default FilterElement;
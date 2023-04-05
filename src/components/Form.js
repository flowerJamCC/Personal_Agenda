import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const Form = () => {
    const [arrayOfTodos, setArrayOfTodos] = useState([]);
    const [listItem, setListItem] = useState('');
    const handleAdd = () => {
        setArrayOfTodos([...arrayOfTodos, listItem.trim()]);
        setListItem('');
    };
    const handleRemoveTodo = (index) => {
        setArrayOfTodos([...arrayOfTodos.slice(0, index), ...arrayOfTodos.slice(index + 1)]);
      };
    return (
        <div className='form'>
            <label htmlFor='main-input'>Schedule Appointment</label>
            <input id='main-input' name='first-input' type='text' 
            value={listItem} onChange={(e) => setListItem(e.target.value)}/>
            <Button type='submit' onClick={ handleAdd } variant='outlined'>ADD</Button>
            <ul>
                {arrayOfTodos.map((ele, index) => {
                    return (
                        <div>
                            <Card sx={{width: 300, padding: '10px', marginTop: '5px', 
                            display:'flex', justifyContent: 'space-between', 
                            fontFamily: 'Gruppo', fontSize:'20px', opacity:'0.9'
                            }}>
                            <b><li key={index}>{ele}</li></b>
                            <Button onClick={() => handleRemoveTodo(index)}>X</Button>
                            </Card>
                            
                        </div>
                        
                    )
                })}
            </ul>
        </div>
    );
};

export default Form;
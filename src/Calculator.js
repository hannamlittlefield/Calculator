import React from 'react'
import {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import NumberButton from './NumberButton';

export default function Calculator() {
const [display, setDisplay] = useState('0');

function handleOnEquals(e){
    setDisplay(eval(display))
}


function displayNum(event){
    /* regex looks for double zeroes at the beginning or multiple decimals */
    let regTest = display + event.target.value
    if(!/[.+\-*\/]0{2}|[.+\-*\/]{2}/.test(regTest)){
        if (display === '0'){
            setDisplay(event.target.value)
        }
        else {
            setDisplay(display + event.target.value)
        }
    }
}

function handleOnClear(e){
    setDisplay('0')
}
    return(
    <div className="container">
        <div className="display">{display}</div>
        {[{id: 'add', numVal: '+'},{id: 'subtract', numVal: '-'},{id: 'multiply', numVal: '*'}, {id:'divide', numVal: '/'},].map(item => { return <NumberButton id={item.id} numVal={item.numVal} handleClick={displayNum}/>})}
    <Grid 
        style= {{gap: '0em'}}
        container
        direction="row"
        justify="center"
        >
        {[{id: 'decimal', numVal: '.'},{id: 'zero', numVal: '0'},{id: 'one', numVal: '1'},{id: 'two', numVal: '2'}].map(item => { return <NumberButton id={item.id} numVal={item.numVal} handleClick={displayNum}/>})}
    </Grid>
    <Grid 
        style= {{gap: '0em'}}
        container
        direction="row"
        justify="center"
        >
        {[{id: 'three', numVal: '3'},{id: 'four', numVal: '4'},{id: 'five', numVal: '5'}, {id: 'six', numVal: '6'}].map(item => { return <NumberButton id={item.id} numVal={item.numVal} handleClick={displayNum}/>})}
    </Grid>
    <Grid 
        style= {{gap: '0em'}}
        container
        direction="row"
        justify="center"
        >
        {[{id: 'seven', numVal: '7'},{id: 'eight', numVal: '8'},{id: 'nine', numVal: '9'}].map(item => { return <NumberButton id={item.id} numVal={item.numVal} handleClick={displayNum}/>})}
        </Grid>
    <button 
        id="clear"
        onClick={handleOnClear}>Clear</button>
    <button
        id="equals"
        onClick={handleOnEquals}>=</button>
    </div>
    );
}
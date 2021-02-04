import React from 'react'
import Container from '@material-ui/core/Container';
import {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import NumberButton from './NumberButton';

export default function Calculator() {
const defaultDisplay = '0'
const [equals, setEquals] = useState(defaultDisplay);
    
function handleOnEquals(e){
    alert('equals')
    /*onclick that breaks up string and figure out what symbols are being used, then order of operations */
}

/* regex?? */

function handleOnClear(e){
    setEquals(defaultDisplay)
}
    return(
    <Container className="container">
        <div className="display">{defaultDisplay}</div>
        <button 
            id="equals"
            onClick={handleOnEquals}>=</button>
        <button 
            id="clear"
            onClick={handleOnClear}>Clear</button>
    <Grid 
        style= {{gap: '1em'}}
        container
        direction="row"
        justify="center"
        className="marginspace"
        >
            <NumberButton
                id="zero"/>
            <NumberButton
                id="one"/>
            <NumberButton
                id="two"/>
            <NumberButton
                id="three"/>
            <NumberButton
                id="four"/>
            <NumberButton
                id="five"/>
            <NumberButton
                id="six"/>
            <NumberButton
                id="seven"/>
            <NumberButton
                id="eight"/>
            <NumberButton
                id="nine"/>
        </Grid>
    </Container>
    );
}


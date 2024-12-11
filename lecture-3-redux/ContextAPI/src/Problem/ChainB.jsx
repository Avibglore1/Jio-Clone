import React from 'react'
import Footer from '../ThemeComponent/Footer';

function ChainB() {
    console.log('rendered ChainB component');
    return(
        <>
            <h3>ChainB</h3>
            <ChainBGrandParent></ChainBGrandParent>
        </>
    )
}

function ChainBGrandParent(){
    console.log('rendered ChainBGrandParent Component');
    return(
        <>
            <h3>ChainBGrandParent</h3>
             <ChainBParent></ChainBParent>   
        </>
    )
}

function ChainBParent(){
    console.log('rendered ChainBParent Compoenent');
    return(
        <>
            <h3>ChainBParent</h3>
            <ChainBChildren></ChainBChildren>
        </>
    )
}

function ChainBChildren(){
    console.log('rendered ChainAChildren');
    return(
        <>
            <h3>ChainBChildren</h3>
            <Footer></Footer>
        </>
    )
}




export default ChainB
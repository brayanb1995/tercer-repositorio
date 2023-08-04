import React from 'react'


function Home(){
    const listItems = [1,2,3,4]
    
    const addItem = () -> {
        const varibleA = 1;
        const varibleB = 3;
        const varibleC = 2;

        return varibleA*3 + varibleC*varibleB
    }
    return(
        <> <div>Home</div> <button onclick={addItem}/></>
    )
}


export default Home
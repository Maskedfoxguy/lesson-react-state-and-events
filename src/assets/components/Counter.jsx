import React, { useState } from 'react';
 
function Counter() {
  // Declare a new state variable, which we'll call "count"
  let [count, setCount] = useState(0);
  // you can assign any datatype to a state variable
  let [title, setTitle] = useState("Counter");


  //this is a working function
  //Only every second count updates the number by clicking on the + button

//   const increaseCount = () => {
//     setCount(count++)
//   }
//   const decreaseCount = () => {
//     setCount(count--)
//   }

  // React, when updating state based on the previous state,
  // you should pass a function to setCount that takes the previous state as an argument 
  // and returns the new state. 

  const increaseCount = () => {
    setCount(prevCount => prevCount +1);
  }
      // LONGER VERSION WITHOUT THE ARROW SYNTAX 
//   const increaseCount = function() {
//     setCount(function(prevCount) {
//         return prevCount + 1;
//     });
// }
  const decreaseCount = () => {
    setCount(prevCount => prevCount -1);
  }
    // const decreaseCount = function() {
    //     setCount(function(prevCount) {
    //         return prevCount -1;
    //     });
    // }

  const updateTitle = (event) => {
    console.log(event.target.value)
    setTitle(event.target.value);

    // if(event.target.value.length <= 4 ) {
    //     setTitle('Counter')
    // }
    // else {
    //     setTitle(event.target.value);
    // }
  }

 
  return (
    <div className={`Counter ${theme}`}>
      <h2>{title}</h2>

      <input type="text" name="title" value={title} onChange={updateTitle} />
 
      <p> You clicked { count } times! </p> {/* <-- use the "count" variable here */}

      {/* To register an event listener on an element or a component in React 
      we pass the event handler function directly to the event attribute, such as onClick={ handleClick } */}
 
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>


      {/* <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> 
      I can write the function to update the state variable in the onCLick function*/}
    </div>
  );
}
 
export default Counter;
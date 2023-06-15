import * as React from 'react';

//passing data via variable
const title = 'React';

// const myStyle={
//   color:'white',
//   backgroundColor: 'lightblue',
//   borderstyle: '2px solid black'
// };

//passing data from function
function getTitle(testvar){
  return testvar
}


function App() {
  return (
  <div>
      <h1>Testing data from variable: {title}</h1>
      <h1>Testing data from function: {getTitle('world')}</h1>

    <label htmlFor='search'>Search: </label>
    <input id="search" type="text" />
   
    </div>
    );
}



export default App;

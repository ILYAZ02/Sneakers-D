import React,{ useState,useEffect} from 'react';
import styles from './App.module.scss'
import Header from './components/Header';
import Homepage from './pages/homepage/Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Basket from './pages/homepage/basket/Basket';
function App() {
  const [jso,setJso] = useState([])
useEffect (() => {
  async function fetchData(){
  const resp =await fetch('http://localhost:3000/db.json')
  const jso =await resp.json()
  setJso(jso)  
  }
  fetchData()
},[])
// console.log(jso)
const search = data.filter(item =>item.name.tolowerCase().includes(text.tolowerCase()))

  return (

    <BrowserRouter>
      {/* <div className={styles.app}> */}
      <div className={styles.child}>
      <Header/>
<Routes>
  <Route path='/' element={<Homepage data={searchData} text={text} setText={setText}/>}/>
  <Route path='/basket' element={<Basket/>}/>
</Routes>



   
      </div>
    {/* </div> */}
    </BrowserRouter>
 
  );
}

export default App;

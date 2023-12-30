import React ,{useEffect, useState} from 'react';
import {toast} from "react-toastify"
import Navbar from './components/Navbar';
import Filter  from './components/Filter';
import Cards from  './components/Cards';
import { filterData,apiUrl } from './data';
import Spinner from './components/Spinner';



function App() {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(false);
  const [category,setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true);
    try{
        const result = await fetch(apiUrl);
        const output = await result.json();
        setCourses(output.data);
      }
    catch(e){
      toast.error("Something went wrong");

    }
    setLoading(false);
  }


 
  useEffect(() =>{
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col bg-[#DDDDDD]'>
        <div><Navbar/></div>
        <div className='bg-[#DDDDDD]'>
            <div><Filter filterData = {filterData} category ={category} setCategory={setCategory} /></div>
            <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
                {
                loading? (<Spinner/>):(<Cards courses={courses} category={category} />)
                 }
            </div>
      
        </div>

    </div>
  );
}

export default App;

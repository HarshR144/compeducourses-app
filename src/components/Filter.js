import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  

function filterClickHandler(title){
    setCategory(title); 
}
  return (
    <div className=' w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center '>
        {
            filterData.map((item)=>  <button key ={item.id} onClick={()=>filterClickHandler(item.title)}
              className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-60 border-2
              ${category===item.title?"bg-opacity-85 border-white hover:bg-opacity-85":"opacity-40 border-transparent"}
              transition-all duration-300`}
              > {item.title}</button>)
        }

    </div>
  )
}
export default Filter;


import React ,{useState} from 'react'
import Card from './Card'
const Cards = (props) => {

    const [likedCourses,setLikedCourses] = useState([]);
    let courses = props.courses;
    let category = props.category;

    function getCourses(){
        if(category==='All'){
            let allCoursesArr = [];
            Object.values(courses).forEach(array =>
                array.forEach(data=> 
                    allCoursesArr.push(data)))

            return allCoursesArr;
        }
        else{
            return courses[category];
        }
    }




  return (
    <div className='flex flex-wrap justify-center mt-4 gap-8 gap-x-24 mb-4'>
        {(!courses ? (
            <div><p>No data found</p></div>

        ):
            getCourses().map((course)=>
              (<Card key = { course.id}  course={course} likedCourses = {likedCourses} setLikedCourses= {setLikedCourses}/>)
             )
        )
        }
        
    </div>
  )
}
export default Cards;
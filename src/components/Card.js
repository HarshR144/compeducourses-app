import React from 'react';
import {FcLike ,FcLikePlaceholder } from 'react-icons/fc';
import {toast} from 'react-toastify'

const Card = (props) => {
    const course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id) ){
            setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like Removed")
        }
        else{

            if(likedCourses.length ===0){
                setLikedCourses([course.id]);     
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id])
            }
            toast.success("Liked Successfully");
        }
        
    }


    return (
        <div className='w-[300px] bg-black rounded-md overflow-hidden bg-opacity-80'>
            <div className='relative '>
                <img src={course.image.url} alt='' className=""/>
            
                <div className='absolute w-[38px] h-[38px] rounded-full bg-white right-2 -bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize='1.75rem'/>)
                        }
                    </button>
                </div>
            
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{
                    course.description.length >100 ? (course.description.substr(0,100)+"....."):(course.description)
                }</p>
                
            </div> 
            
        </div>
    )
}


export default Card;


import React from 'react'

const FreeCourseCard = (props) => {


    const {imgUrl, title, students, rating} = props.item


  return  (
  <div className="singe_free_course">
  <div className="free_course_img mb-5">
      <img src={imgUrl} alt="" className='w-100'/>
  </div>

  <div className="">
      <h6>{title}</h6>
  </div>
</div>
);
};

export default FreeCourseCard;

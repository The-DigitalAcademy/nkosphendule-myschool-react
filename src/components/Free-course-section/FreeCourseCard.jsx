

import React from 'react'

const FreeCourseCard = (props) => {


    const {imgUrl, title, students, rating} = props.item


  return  (
  <div className="singe_free_course">
  <div className="free_course_img mb-5">
      <img src={imgUrl} alt="" className='w-100'/>
      {/* <button className="btn free_btn"></button> */}
  </div>

  <div className="">
      <h6>{title}</h6>

      {/* <div className=' d-flex alignitems-center gap-5'>
          <span className=' d-flex align-items-center gap-2'><i class="ri-user-line"></i> {students}</span>

          <span className=' d-flex align-items-center gap-2'><i class="ri-star-line"></i> {rating}</span>
      </div> */}
  </div>
</div>
);
};

export default FreeCourseCard;



import React from 'react'

const CourseCard = (props) => {

 const { imgUrl, title, lesson , students, rating} = props.item

  return <div className="single_course_item">
  <div className="course_img">
      <img src={imgUrl} alt=""  className="w-100"/>
  </div>

    <div className="course_details">
        <h6 className="course_title mb-4">{title}</h6>
      
        <div className=' d-flex justity-content-between align-items-center'>
            <p className="lesson d-flex align-items-center gap-1">
                <i class="ri-book-open-line"></i> {lesson} Lesson 
            </p>

            <p className="students d-flex align-items-center gap-1">
                <i class="ri-user-line"></i> {students}K
            </p>
        </div>

      <div className=' d-flex justity-content-between align-items-center'>
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K 
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Enroll Now</a>
          </p>
      </div>
  </div>
</div>
}

export default CourseCard

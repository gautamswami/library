import React from 'react'
import SubjectDrop from '../subjectdrop';
import CourseSelect from '../courseselect';


export default function LabForm() {
  return (
    <>
    <CourseSelect />
          <SubjectDrop />
       
            <input name='link' placeholder='PUBLIC LINK OF YOUR PDF' />
  
    </>
  )
}

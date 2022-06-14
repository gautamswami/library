import React from 'react'
import SubjectDrop from './subjectdrop';
import YearDrop from './yeardrop';
import CourseSelect from './courseselect';


export default function PaperForm() {
  return (
    <>
    <CourseSelect />
          <SubjectDrop />
            <YearDrop/>
            <input name='link' placeholder='PUBLIC LINK OF YOUR PDF' />
  
    </>
  )
}

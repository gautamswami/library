import React ,{useState} from 'react'
// import CourseSelect from '../courseselect';
import LabForm from './labform';
import NotesForm from './notesform';
import PaperForm from '../paperform';
// import SubjectDrop from '../subjectdrop';
// import UnitDrop from '../unitdrop';
import './uploadform.css'
export default function UploadForm() {
    const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
    var x = document.getElementById('btn1').textContent
    console.log(x)
  };
  const handleTab2 = () => {
    // update the state to tab2\
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  return (
    <div className='test'>
       
       <div>
          <button id='btn1'
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Notes
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Lab Manual
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            Papers or solutions
          </button>
        </div>
      {activeTab === "tab1" ? (
        < NotesForm/>
        ) : activeTab === "tab2" ? (
          <LabForm/>
          ) : (
            <PaperForm/>
            )}
    </div>
  )
}

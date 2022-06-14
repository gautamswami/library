import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import SubjectDrop from './subjectdrop';
// import UnitDrop from './unitdrop';
// import CourseSelect from './courseselect';
const handleClick = () => {
  var x = document.getElementById("selected").value;
// var m = document.getElementById("selected")
// var t = m.options[x.selectedIndex].text;
// console.log(x);
var z = document.getElementById("selected3");
var a = document.getElementById("selected4");

var y = document.getElementById("selected2");
if (x == "bba") {
y.style.visibility = "hidden";
z.style.visibility = "hidden";
a.style.visibility = "visible";
} 
else if (x == "diploma") {
  a.style.visibility = "visible";
  z.style.visibility = "hidden";
  y.style.visibility = "visible";
} else {
  y.style.visibility = "visible";
  z.style.visibility = "visible";
  a.style.visibility = "hidden";
}
};

// var subjectObject = {
//     "B.TECH": {
//       "CSE": ["Links", "Images", "Tables", "Lists"],
//       "ECE": ["Borders", "Margins", "Backgrounds", "Float"],
//       "CIVIL": ["Variables", "Operators", "Functions", "Conditions"]    
//     },
//     "Back-end": {
//       "PHP": ["Variables", "Strings", "Arrays"],
//       "SQL": ["SELECT", "UPDATE", "DELETE"]
//     }
//   }
//   window.onload = function() {
//     var subjectSel = document.getElementById("subject");
//     var topicSel = document.getElementById("topic");
//     var chapterSel = document.getElementById("chapter");
//     for (var x in subjectObject) {
//       subjectSel.options[subjectSel.options.length] = new Option(x, x);
//     }
//     subjectSel.onchange = function() {
//       //empty Chapters- and Topics- dropdowns
//       chapterSel.length = 1;
//       topicSel.length = 1;
//       //display correct values
//       for (var y in subjectObject[this.value]) {
//         topicSel.options[topicSel.options.length] = new Option(y, y);
//       }
//     }
//     topicSel.onchange = function() {
//       //empty Chapters dropdown
//       chapterSel.length = 1;
//       //display correct values
//       var z = subjectObject[subjectSel.value][this.value];
//       for (var i = 0; i < z.length; i++) {
//         chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
//       }
//     }
//   }
export default function NotesForm() {
  const navigate = useNavigate();
  const [ user , setUser] = useState({
    course:"",
    branch:"",
    semester:"",
    name:"",
    unit:"",
    link:""
  })
let name,value;
const handleInputs = (e) =>{
  // console.log(e)
  name = e.target.name
  value = e.target.value
  setUser({...user,[name]:value})
}

const Clicked = async (e) =>{
 e.preventDefault();
 const {course,branch,semester,name,unit,link} = user;
  console.log(user);
// const res = await fetch('/notes',{
//   method:'POST',
//   headers:{
//     "Content-Type" :"application/json"
//   },
//   body:JSON.stringify({
//     course,branch,semester,name,unit,link
//   })
// })
//  const data = await res.json();
//   if(!data){
//     window.alert("problem here")
//   }else{
//     window.alert("done here")
//     navigate('/home');
//   }
}



  return (
    <>
  <div className="App">
          <p>Please select course and semester</p>
<select id="selected" 
name='course'
 value={user.course}
 onChange={handleInputs}
 onClick={handleClick} >
            <option hidden>Course</option>
          <option value="btech">b.tech</option>
          <option value="bba">bba</option>

          <option value="diploma">diploma</option>
        </select>
        <br />
        <select 
         id="selected2"
name='branch'
value={user.branch}
onChange={handleInputs}
        onClick={handleClick}>
            <option hidden>Branch</option>

          <option value="cse">cse</option>
          <option value="civil">civil</option>

          <option value="ece">ece</option>
        </select>
        <br />
        <select id="selected3"
         onClick={handleClick}
        
name='semester'
value={user.semester}
onChange={handleInputs}
         >
            <option hidden>semester</option>

          <option value="sem1">sem1</option>
          <option value="sem2">sem2</option>
          <option value="sem3">sem3</option>
        </select>
        <select id="selected4" style={{visibility:"hidden"}} 
        onClick={handleClick}
        
name='semester'
value={user.semester}
onChange={handleInputs}
        >
            <option hidden>semester</option>

          <option value="dsem1">dsem1</option>
          <option value="dsem2">dsem2</option>
          <option value="dsem3">dsem3</option>
        </select>
      </div>
  <label>Subject Name</label>
            <input name='name' value={user.name} onChange={handleInputs} placeholder='Compiler Design' />
            <label>Unit Number</label>
            <input name='unit' value={user.unit} onChange={handleInputs} placeholder='4' />
            <label>Public link of your Pdf</label>
            <input name='link' value={ user.link} onChange={handleInputs} placeholder='link.drive.com' />
  
        <button onClick={Clicked}>submit</button>

{/*    
        <form name="form1" id="form1">
  Subjects: <select name="subject" id="subject">
      <option value="" selected="selected">Select subject</option>
    </select>
   
  Topics: <select name="topic" id="topic">
      <option value="" selected="selected">Please select subject first</option>
    </select>
    
  Chapters: <select name="chapter" id="chapter">
      <option value="" selected="selected">Please select topic first</option>
    </select>
    
    <input type="submit" value="Submit" />  
  </form> */}

    </>
  )
}

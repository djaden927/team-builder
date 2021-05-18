import React, { useState } from "react";
import './App.css';
import Team from "./Team.js"
import Form from "./Form.js"

const initialFormValues = {
  name: "",
  team: "",
  role: ""
}

function App() {
const [teamMembers, setTeamMember] = useState([{
  name: "",
  team: "",
  role: ""
}
])
const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (name, value) => {
  // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
  //  It takes in the name of an input and its value, and updates `formValues`
  setFormValues({...formValues, [name]: value})
}

const submitForm = () => {
  const teamMate = {
    name: formValues.name,
    team: formValues.team,
    role: formValues.role
  }
  setTeamMember([teamMate, ...teamMembers])
  setFormValues(initialFormValues)
}

  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      {teamMembers.map(obj => {
        return <Team details={obj} />
      })}
          
    </div>
  );
}

export default App;

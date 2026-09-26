import { useState } from "react";
import "./App.css";

const ShowSkill = ({ skill }) => {
  return (
    <>
      <h2 className="skill">{skill}</h2>
    </>
  );
};
const App = () => {
  const [skills, setSkills] = useState(["JavaScript", "NextJS", "ReactJS"]);
  const [inputValue, setInputValue] = useState("");
  const handleAddSkill = (newSkill) => {
    setSkills((prevSkill) => [...prevSkill, newSkill]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleRemoveSkill = (newSkill) => {
    console.log(newSkill);

    setSkills((prevSkills) => {
      return prevSkills.filter(
        (skill) => skill.toLowerCase() !== newSkill.toLowerCase(),
      );
    });
  };

  return (
    <>
      <h1>My Skills Are: </h1>
      <div className="skills">
        {skills.map((skill) => (
          <ShowSkill key={skill} skill={skill} />
        ))}
      </div>

      <div className="btn-list">
        <input type="text" onChange={(e) => handleChange(e)} />
        <button className="btn" onClick={() => handleAddSkill(inputValue)}>
          Add Skill
        </button>
        <button className="btn" onClick={() => handleRemoveSkill(inputValue)}>
          Remove Skill
        </button>
      </div>
    </>
  );
};

export default App;

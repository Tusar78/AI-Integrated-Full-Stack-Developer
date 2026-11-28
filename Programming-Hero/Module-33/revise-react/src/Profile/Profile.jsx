import './Profile.css'

const user = {
  name: "Tusar",
  Profession: "Web Developer",
  description: "React Learner",
};

const Profile = ({skill}) => {
  return (
    <>
      <div className="profile">
        <h2>{user.name}</h2>
        <h2>{user.Profession}</h2>
        <h2>{user.description}</h2>
        <p>My New Skill: {skill}</p>
      </div>
    </>
  );
};

export default Profile;

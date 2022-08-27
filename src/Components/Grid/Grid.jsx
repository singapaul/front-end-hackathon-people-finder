import ProfileCard from "../ProfileCard/ProfileCard";
import "./Grid.scss";

const Grid = ({ profiles }) => {
  console.log(profiles);
  return (
    <div className="Grid">
      {profiles.map((profile) => {
        return <ProfileCard profile={profile} key={profile.id} />;
      })}
    </div>
  );
};

export default Grid;

import ProfileCard from "../ProfileCard/ProfileCard";
import "./Grid.scss";

const Grid = ({ cards }) => {
  return (
    <div className="Grid">
      {cards.map((card) => {
        return <ProfileCard profile={card} key={card.id} />;
      })}
    </div>
  );
};

export default Grid;

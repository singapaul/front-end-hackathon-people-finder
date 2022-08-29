import EngagementCard from "../EngagementCard/EngagementCard";

const EngagementGrid = ({cards}) => {

    console.log(cards)
  return (
    <div className="Grid">
      {cards.map((card) => {
        return  <EngagementCard engagement={card} key={card.id}/>;
      })}
    </div>
  )
}

export default EngagementGrid
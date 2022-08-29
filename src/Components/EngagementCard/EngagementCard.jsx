import "./EngagementCard.scss";

const EngagementCard = ({ engagement }) => {
  return (
    <div className="engagementCard">
      <h5 className="engagementCard__title">Engagement</h5>
      <h3 className="engagementCard__heading">{engagement.engagementName} </h3>
      <ul className="engagementCard__attributes">
        <li className="engagementCard__listItem">Nuclear</li>
        <li className="engagementCard__listItem">Python</li>
        <li className="engagementCard__listItem">6 months</li>
      </ul>
      <p className="engagementCard__text">{engagement.description}</p>
      <ul className="engagementCard__packages">
        <li className="engagementCard__listItem">Keras</li>
        <li className="engagementCard__listItem">Selenium</li>
        <li className="engagementCard__listItem">Pandas</li>
      </ul>
    </div>
  );
};

export default EngagementCard;

import PropTypes from 'prop-types';
const OverviewCard = ({ title, icon, platform, count, change, changeType }) => {
    return (
        <div className="overview-card">
            <div className="left">
                <p>{title}</p> <p>{count}</p>
            </div>
            <div className="right">
                <img src={icon} alt={`${platform} icon`} />
                <p className={changeType}>{change}</p>
            </div>
        </div>
    );
};

OverviewCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    change: PropTypes.string.isRequired,
    changeType: PropTypes.oneOf(['positive', 'negative']).isRequired
};
export default OverviewCard;

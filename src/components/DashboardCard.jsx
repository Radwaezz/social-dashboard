import PropTypes from 'prop-types';

const DashboardCard = ({ icon, platform, username, followers, change, changeType }) => {
    return (
        <div className={`dashboard-card ${platform}`}>
            <img src={icon} alt={`${platform} icon`} className="icon" />
            <h2>{username}</h2>
            <h1>{followers}<br /> Followers</h1>
            <p className={changeType}>{change} Today</p>
        </div>
    );
};

DashboardCard.propTypes = {
    icon: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    change: PropTypes.string.isRequired,
    changeType: PropTypes.oneOf(['positive', 'negative']).isRequired
};

export default DashboardCard;


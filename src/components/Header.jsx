import PropTypes from 'prop-types';

const Header = ({ toggleTheme, theme }) => {
    return (
        <header>
            <div className="header">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>

            <div className="dark-mode-toggle">
                <span>Dark Mode</span>
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    id="darkModeToggle"
                />
                <label htmlFor="darkModeToggle"></label>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Header;

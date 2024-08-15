
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

ThemeSwitcher.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default ThemeSwitcher;

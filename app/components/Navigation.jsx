var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
                <ul className="menu" data-dropdown-menu>
          <li className="menu-text">React Timer App</li>
          <li>
              <IndexLink to="/" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>Created by <a href="http://www.mead.io" target="_blank">Gordon</a></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;

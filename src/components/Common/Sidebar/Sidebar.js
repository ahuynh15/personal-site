import PropTypes from "prop-types";

const Sidebar = ({ anchors }) => {
  return (
    <nav className="h-screen sticky top-0 mx-8 flex items-center text-2xl">
      <ul>
        {anchors.map((anchor, index) => {
          return (
            <li className="mb-16" key={index}>
              {anchor.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

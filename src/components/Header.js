import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker1",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// You can add css hear in js
// const HeaderStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;

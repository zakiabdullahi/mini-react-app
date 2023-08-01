import "../style.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="header container">
          <a href="#">MyLogo</a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

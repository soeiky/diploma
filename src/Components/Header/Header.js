import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header>
    <div className="overlay">
  <h1>Simply The Best</h1>
  <h3>Reasons for Choosing US</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
    <br></br>

    <button>READ MORE</button>
      </div>
  </header>
  );
}

export default Header;
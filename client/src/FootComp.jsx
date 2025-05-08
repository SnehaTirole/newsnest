


const FootComp = () => {
  return (
    <footer className="footcomp">
      <div className="footcomp-container">
        <p className="footcomp-text">&copy; {new Date().getFullYear()} NewsNest. All rights reserved.</p>
        <div className="footcomp-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default FootComp;

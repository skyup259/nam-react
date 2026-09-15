const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img src="/assets/logo.jpg" alt="Logo" />
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </div>
);
export default Header;
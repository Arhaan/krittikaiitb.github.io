import Link from 'next/link'

const NavLink = ({href, text}: {href:string, text:string}) => (
  <li className="nav-item mx-1">
  <Link
    className="btn btn-link text-light my-2 my-sm-0 mx-1"
    href={href}
  >
    <b className="lead">{text}</b>
  </Link>
  </li>

)

const DarkModeSwitch = () => (
<li className="nav-item my-2 mx-md-0 mx-3">
  <div className="custom-control custom-switch m-0 p-0">
    <input
      type="checkbox"
      className="custom-control-input d-none"
      id="darkSwitch"
    />
    <label
      className="custom-control-label darkToggle"
      htmlFor="darkSwitch"
    >
      <div className="dark-mode-img" />
    </label>
  </div>
</li>

)

const Navbar = ()=> (
    <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-dark bg-dark topNavBar cinzel">
  <Link href="/">
    <img
      src="/img/logo_gif.gif"
      alt="logo"
      className="rounded-lg"
      height="50px"
    />
  </Link>
  <Link className="navbar-brand mx-md-4 font-weight-light" href="/">
    <h3 style={{ marginBottom: 0 }}>Krittika</h3>
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <NavLink href="/events" text="Events"></NavLink>
      <NavLink href="/team" text="Team"></NavLink>
      <DarkModeSwitch/>
    </ul>
  </div>
</nav>

)

export default Navbar;
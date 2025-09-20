import './Navbar.css'

function Navbar() {
  const handleHomeClick = () => {
    window.location.href = '/';
  }

  const handleSignUpClick = () => {
    window.location.href = '/signup';
  }

  const handleLoginClick = () => {
    window.location.href = '/login';
  }

  return (
    <>
    <nav>
      <img className="logo" onClick={handleHomeClick} src="logo.png"></img>
      <div className='navbar-grid'>
        <div className='navbar-grid-left'>
          <ul style={{ listStyleType: 'none', justifyContent: 'center', display: 'flex', gap: '20px', margin: 'auto', padding: 0 }}>
            <li>
              <button onClick={handleHomeClick}>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
        <div className='navbar-grid-center' style={{ textAlign: 'center' }}></div>
        <div className='navbar-grid-right'>
          <ul style={{ listStyleType: 'none', justifyContent: 'center', display: 'flex', gap: '20px', margin: 'auto', padding: 0 }}>
            <li>
              <button onClick={handleLoginClick}>Log in</button>
            </li>
            <li>
              <button onClick={handleSignUpClick}>Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
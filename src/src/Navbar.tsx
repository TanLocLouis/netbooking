import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav>
      <img className="logo" src="logo.png"></img>
      <div className='navbar-grid'>
        <div className='navbar-grid-left'>
          <ul style={{ listStyleType: 'none', justifyContent: 'center', display: 'flex', gap: '20px', margin: 'auto', padding: 0 }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='navbar-grid-center' style={{ textAlign: 'center' }}></div>
        <div className='navbar-grid-right'>
          <ul style={{ listStyleType: 'none', justifyContent: 'center', display: 'flex', gap: '20px', margin: 'auto', padding: 0 }}>
            <li>Login</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
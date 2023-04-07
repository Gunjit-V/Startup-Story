import './App.css';
import logo from './logo.png'
import { NavLink, BrowserRouter } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';
import menu from './menu.png'

// const Navbar = () => {
//   return (
//     <BrowserRouter>
//       <nav className='navbar'>
//         <div className='container'>
//           <div className='logo'>
//             <img src={logo} alt='Logo' className='navbar-logo' />
//           </div>
//           <div className='nav-elements'>
//             <ul >
//               <li>
//                 <NavLink to="/">ADVICE</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/">CV</NavLink></li>
//               <li>
//                 <NavLink to="/">CAREER TEST</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/">JOBS</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/">CAREER PATHS</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/">VIDEO</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/">NEWSLETTER</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav >
//     </BrowserRouter>
//   )
// }

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="container">
          <div className='logo'>
            <img src={logo} alt='Logo' className='logo' />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={menu} alt='menu' className='menu-logo' />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">ADVICE</NavLink>
              </li>
              <li>
                <NavLink to="/">CV</NavLink></li>
              <li>
                <NavLink to="/">CAREER TEST</NavLink>
              </li>
              <li>
                <NavLink to="/">JOBS</NavLink>
              </li>
              <li>
                <NavLink to="/">CAREER PATHS</NavLink>
              </li>
              <li>
                <NavLink to="/">VIDEO</NavLink>
              </li>
              <li>
                <NavLink to="/">NEWSLETTER</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  )
}

const Text = () => {
  return (
    <div className='text-container'>
      <h1>
        Kickstart and advance your career
      </h1>
      <h2>
        Expert tools and advice to achieve your career goals
      </h2>
    </div>
  )
}

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src='https://www.careeraddict.com/images/home_page/cv_help.webp' alt='logo1'></img>
        <h1>CV/Résumé Help</h1>
        <p>Professional review, writing, plus unique templates to ensure you land the job</p>
        <a href='/'>See Options</a>
      </div>
      <div className='card'>
        <img src='https://www.careeraddict.com/images/home_page/career-testing.webp' alt='logo1'></img>
        <h1>Career Testing</h1>
        <p>Smart and accurate career matching so you can plan your next move</p>
        <a href='/'>Start the test</a>
      </div>
      <div className='card'>
        <img src='https://www.careeraddict.com/images/home_page/career-advice.webp' alt='logo1'></img>
        <h1>Job Search</h1>
        <p>Thousands of exciting job opportunities with companies around the world</p>
        <a href='/'>Browse jobs</a>
      </div>
      <div className='card'>
        <img src='https://www.careeraddict.com/images/home_page/career-advice.webp' alt='logo1'></img>
        <h1>Career Advice</h1>
        <p>Career-boosting tips, industry insights and expert opinion from the pros</p>
        <a href='/'>Read advice</a>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Navbar />
      <Text />
      <Card />
    </div>
  );
}

export default App;

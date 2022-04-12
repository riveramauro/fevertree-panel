import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationLiks = [
  {
    url: '/',
    name: 'hand-picked\ningredients',
    color: '#00a7d9'
  },
  {
    url: '/SparklinPink',
    name: 'Sparkling\nPINK GRAPEFRUIT',
    color: '#e75f70'
  },
  {
    url: '',
    name: 'Sparkling\nLIME & YUZU',
    color: '#56a045'
  },
  {
    url: '',
    name: 'PREMIUM\nCLUB SODA',
    color: '#b155af'
  },
  {
    url: '/EasyCocktails',
    name: 'EASY\nCOCKTAILS',
    color: '#52b99e'
  },
  {
    url: '',
    name: 'SUSTAINABILITY',
    color: '#eac940'
  },
]

const Style = {
  mainNav: 'flex justify-evenly items-center text-center font-agenda-light uppercase text-2xl leading-none whitespace-pre-wrap h-28',
  link: 'w-full h-full flex items-center justify-center',
  linkActive: 'w-full h-full flex items-center justify-center font-agenda-medium text-white'
}

function Navigation() {
  
  const [activeColor, setActiveColor] = useState('');
  const location = useLocation();

  const setActiveClass = (elementPath) => {
    NavigationLiks.map(nav => {
      if(nav.url === elementPath) {
        setActiveColor(nav.color)
      }
    })
  }

  useEffect(() => {
    setActiveClass(location.pathname)
  }, [location])
  

  return(
    <nav className={Style.mainNav} style={{borderBottom: `15px solid ${activeColor}`}}>
      {NavigationLiks.map(link => (
          <NavLink key={link.name} to={link.url}
            style={({ isActive}) => (isActive ? {background: link.color} : {background: link.color, boxShadow: 'inset 0px 0px 15px #00000052'})} 
            className={({isActive}) => (isActive ? Style.linkActive : Style.link )}
            >
            <span>{link.name}</span>
          </NavLink>
      ))}
    </nav>
  )
}

export default Navigation;
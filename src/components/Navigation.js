import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLiks = [
  {
    id: '/',
    name: 'hand-picked\ningredients',
    color: '#00a7d9'
  },
  {
    id: 'drinks',
    name: 'Sparkling\nPINK GRAPEFRUIT',
    color: '#e75f70'
  },
  {
    id: '/',
    name: 'SPArKlING\nLIME & YUZU',
    color: '#56a045'
  },
  {
    id: '/',
    name: 'PREMIUM\nCLUB SODA',
    color: '#b155af'
  },
  {
    id: '/',
    name: 'EASY\nCOCKTAILS',
    color: '#52b99e'
  },
  {
    id: '/',
    name: 'SUSTAINABILITY',
    color: '#eac940'
  },
]

const Style = {
  mainNav: 'flex justify-evenly items-center text-center font-agenda-light uppercase text-2xl whitespace-pre-wrap h-28',
  link: 'w-full h-full flex items-center justify-center block',
  linkActive: 'w-full h-full flex items-center justify-center font-agenda-medium text-white block'
}

function Navigation() {
  
  const [activeColor, setActiveColor] = useState('#00a7d9');

  const setActiveClass = (element, color) => {
    setActiveColor(color)
  }

  return(
    <nav className={Style.mainNav} style={{borderBottom: `15px solid ${activeColor}`}}>
      {NavigationLiks.map(link => (
          <NavLink key={link.name} to={link.id}
            style={({ isActive}) => (isActive ? {background: link.color} : {background: link.color, boxShadow: 'inset 0px 0px 15px #00000052'})} 
            className={({isActive}) => (isActive ? Style.linkActive : Style.link )}
            onClick={(element) => {
              setActiveClass(element, link.color)
            }}
            >
            <span>{link.name}</span>
          </NavLink>
      ))}
    </nav>
  )
}

export default Navigation;
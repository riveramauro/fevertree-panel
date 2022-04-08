import { NavLink } from "react-router-dom";

const NavigationLiks = [
  {
    id: '/',
    name: 'Home',
  },
  {
    id: 'drinks',
    name: 'Drinks',
  },
  {
    id: '/',
    name: 'Share',
  },
]

const Style = {
  mainNav: 'flex justify-evenly items-center text-center',
  link: 'py-3 w-full bg-fuchsia-200',
  linkActive: 'py-3 w-full bg-slate-200'
}

function Navigation() {
  return(
    <nav className={Style.mainNav}>
      {NavigationLiks.map(link => (
        <NavLink key={link.name} to={link.id} className={({ isActive }) => (isActive ? Style.linkActive : Style.link)} >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation;
import { menu_items } from '../menu_items';
import Menu from './menu';

import './navbar.css';

const Navbar = () => {
  return (
    <ul className="menus">
      {menu_items.map((menu, index) => {
        const depthLevel = 0;
        return (
          <Menu
            items={menu}
            key={index}
            depthLevel={depthLevel}
          />
        );
      })}
    </ul>
  );
};

export default Navbar;

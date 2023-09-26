import React from 'react';
import classes from './SectionsNav.module.css';
import { v4 } from 'uuid';

const SectionsNav = ({ navItems, setNavItems, style }) => {
  // Nav Items Array should naturally come from outside (its parnt component) the component so it maps through internally. The array (state) should have objects wit properties "title" and "isActive". Demo shown below

  //   const [navItems, setNavItems] = useState([
  //     { title: 'Overview', isActive: true },
  //     { title: 'Q&A', isActive: false },
  //     { title: 'Discussion', isActive: false },
  //     { title: 'Transcript', isActive: false },
  //   ]);

  const activeChangeHandler = (index) => {
    const navCopy = [...navItems].map((datum, i) => {
      if (i === index) {
        return {
          ...datum,
          isActive: true,
        };
      }

      return {
        ...datum,
        isActive: false,
      };
    });
    setNavItems(navCopy);
  };

  return (
    <div className={classes.container}>
      <div className={classes.listNav}>
        {navItems.map((data, i) => {
          return (
            <div
              key={v4()}
              onClick={() => {
                activeChangeHandler(i);
              }}
              className={
                data.isActive ? `${classes.activeDiv}` : `${classes.div}`
              }
              style={style}
            >
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionsNav;

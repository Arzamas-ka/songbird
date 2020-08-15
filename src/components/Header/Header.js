import React from 'react';

import { speciesBirds } from '../../helpers/birds';

import cls from './Header.module.css';

const Header = () => {
  return (
    <div className='container'>
      <div className={cls.TopPanel}>
        <a className={cls.Logo} title='Songbird' href='/'>
          <h1 className={cls.LogoTitle}>
            <span className={cls.LogoTitleStart}>Song</span>
            <span className={cls.LogoTitleEnd}>bird</span>
          </h1>
        </a>
        <span className={cls.Score}>Счет: 0</span>
      </div>
      <ul className={cls.Nav}>
        {speciesBirds.map(({ id, kind }) => {
          return (
            <li className={cls.NavItem} key={id}>
              <span className={cls.NavLink}>{kind}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;

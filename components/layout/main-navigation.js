import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>

          <li>
            <Link href='/information'>Information</Link>
          </li>

          <li>
            <Link href='/build'>Build</Link>
          </li>

          <li>
            <Link href='/blog'>Blog</Link>
          </li>

          <li>
            <Link href='/references'>References</Link>
          </li>


          <li>
            <Link href='/about'>About</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
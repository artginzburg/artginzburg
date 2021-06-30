/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import UnorderedList from './jsx-md/UnorderedList';

function Header() {
  return (
    <>
      {pkg.description}
      <LineBreak />
      <LineBreak />
      <UnorderedList>
        <>Is looking for collaboration</>
        <>Dives into bot development</>
        <>Also good at cinematography 📺</>
      </UnorderedList>
      <LineBreak />
    </>
  );
}

export default Header;

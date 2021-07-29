/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import data from '../utils/data';

import UnorderedList from './jsx-md/UnorderedList';

function Header() {
  return (
    <>
      {`${data.age}-year-old ${pkg.description}`}
      <LineBreak />
      <LineBreak />
      {`<img align="right" alt="GitHub User's stars" src="https://img.shields.io/github/stars/artginzburg?style=social">`}
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

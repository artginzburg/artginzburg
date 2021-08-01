/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import data from '../utils/data';

import UnorderedList from './jsx-md/UnorderedList';

function Header() {
  return (
    <>
      {`${data.age}yo ${pkg.description}`}
      <LineBreak />
      <LineBreak />
      {`<img align="right" alt="GitHub User's stars" src="https://img.shields.io/github/stars/artginzburg?style=social">`}
      <LineBreak />
      <LineBreak />
      <UnorderedList>
        <>Experienced in Front-end (Mid) & Back-end (Jun) Website Development</>
        <>Dives into bots, automation and pure shell tools</>
        <>Also good at cinematography 📺 (that makes me somewhat of a designer)</>
      </UnorderedList>
      <LineBreak />
    </>
  );
}

export default Header;

/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import data from '../utils/data';

import UnorderedList from './jsx-md/UnorderedList';
import Img from './jsx-md/Img';

function Header() {
  return (
    <>
      {`${data.age}yo ${pkg.description}`}
      <LineBreak />
      <LineBreak />
      <Img align="right" alt="GitHub User's stars" src="https://img.shields.io/github/stars/artginzburg?style=social" />
      <LineBreak />
      <LineBreak />
      <UnorderedList>
        <>Middle Fullstack Web dev</>
        <>Dives into bots, automation and pure shell tools</>
        <>Good at cinematography =&gt; shadows and intuitive design</>
      </UnorderedList>
      <LineBreak />
    </>
  );
}

export default Header;

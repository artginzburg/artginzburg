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
      {`${pkg.description}`}
      <LineBreak />
      <LineBreak />
      <Img
        align="right"
        alt="GitHub User's stars"
        src="https://img.shields.io/github/stars/artginzburg?style=social"
      />
      <LineBreak />
      <Img
        align="right"
        alt="NPM Maintainer's downloads"
        src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Fnpmstalk-fw29jfsdhygw.runkit.sh"
      />
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

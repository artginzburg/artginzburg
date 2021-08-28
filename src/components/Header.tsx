/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import UnorderedList from './jsx-md/UnorderedList';
import Img from './jsx-md/Img';

function Header() {
  return (
    <>
      {pkg.description}
      <LineBreak />
      <LineBreak />
      <Img
        align="right"
        alt="GitHub User's stars"
        src="https://img.shields.io/github/stars/artginzburg?style=social"
      />
      <LineBreak />
      {'<a href="https://www.npmjs.com/~artginzburg">'}
      <Img
        align="right"
        alt="NPM Maintainer's downloads"
        src="https://img.shields.io/endpoint?url=https://artginzburg.runkit.io/npmstalk/branches/master/artginzburg"
      />
      {'</a>'}
      <LineBreak />
      <LineBreak />
      <UnorderedList>
        <>Position: Junior Frontend/Backend developer</>
        <>Interests: bots, automation, single-purpose utilities, cinematography</>
      </UnorderedList>
      <LineBreak />
    </>
  );
}

export default Header;

/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import UnorderedList from './jsx-md/UnorderedList';
import Img from './jsx-md/Img';

function Header() {
  return (
    <>
      {pkg.description}<LineBreak />
      <LineBreak />
      <UnorderedList>
        <>
          Position: {'<sub>'}
          <Img width="30" src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" />
          {'</sub>'} Junior Frontend/Backend developer
        </>
        <>Interests: bots, automation, single-purpose utilities, cinematography</>
      </UnorderedList>
      <LineBreak />
      <>My notes: [gist.github.com](https://gist.github.com/artginzburg)</>
      <LineBreak />
      <Img
        align="right"
        alt="GitHub User's stars"
        src="https://img.shields.io/github/stars/artginzburg?style=social"
      />
      <LineBreak />
      <Img
        align="right"
        width="50"
        src="https://media3.giphy.com/media/UuMG0Cbm8iNoyEmZLG/giphy.gif?cid=790b7611a87df11186b66ec731e9d6246751ab8f5bf48db2&rid=giphy.gif&ct=s"
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
    </>
  );
}

export default Header;

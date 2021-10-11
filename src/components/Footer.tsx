/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import links from '../utils/links';
import Br from './jsx-md/Br';

import Img from './jsx-md/Img';
import LinkReferences from './jsx-md/LinkReferences';

function Footer() {
  return (
    <>
      <LineBreak />
      {'<div align="right">'}
      <LineBreak />
      My coding stats since last week: {'<sub>'}
      {'<a href="https://wakatime.com/@artginzburg">'}
      <Img
        src="https://wakatime.com/badge/user/992f2c32-f468-4d6e-a817-ac32f0029edf.svg"
        title="Total time coded since Aug 29 2021"
      />
      {'</a>'}
      {'</sub>'}
      <LineBreak />
      <Br />
      <LineBreak />
      {'<a href="https://www.codewars.com/users/artginzburg">'}
      <Img src="https://www.codewars.com/users/artginzburg/badges/micro" title="Codewars" />
      {'</a>'}
      <LineBreak />
      {'</div>'}
      <LineBreak />
      <LineBreak />
      <LinkReferences>{links}</LinkReferences>
      <LineBreak />
    </>
  );
}

export default Footer;

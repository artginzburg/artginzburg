/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import links from '../utils/links';

import Img from './jsx-md/Img';
import LinkReferences from './jsx-md/LinkReferences';

function Footer() {
  return (
    <>
      <LineBreak />
      {'<div align="right">'}
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

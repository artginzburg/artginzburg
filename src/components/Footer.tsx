/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import links from '../utils/links';

import Br from './jsx-md/Br';
import LinkReferences from './jsx-md/LinkReferences';

function Footer() {
  return (
    <>
      <LineBreak />
      <LineBreak />
      <Br />
      <LineBreak />
      <Br />
      <LineBreak />
      <LineBreak />
      ---
      <LineBreak />
      <LineBreak />
      <LinkReferences>{links}</LinkReferences>
      <LineBreak />
    </>
  );
}

export default Footer;

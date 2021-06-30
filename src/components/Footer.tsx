/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

import links from '../utils/links';

import Br from './Br';
import LinkReferences from './LinkReferences';

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

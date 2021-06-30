/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak } from 'jsx-md';
import pkg from '../../package.json';
import UnorderedList from './UnorderedList';
import Img from './Img';
import LinkWithLabel from './LinkWithLabel';

const Readme: Component = () => (
  <>
    {pkg.description}
    <LineBreak />
    <LineBreak />
    <UnorderedList>
      {'Is looking for collaboration'}
      {'Dives into bot development'}
      {'Also good at cinematography 📺'}
    </UnorderedList>
    <LineBreak />
    <Heading level={3}>Contacts</Heading>
    <LinkWithLabel to="instagram">
      <Img
        align="left"
        title="art.ginzburg | Instagram"
        width="22px"
        src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
      />
    </LinkWithLabel>
  </>
);

export default Readme;

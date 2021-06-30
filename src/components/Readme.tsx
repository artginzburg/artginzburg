/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak, Image } from 'jsx-md';
import pkg from '../../package.json';
import UnorderedList from './UnorderedList';

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
    <LineBreak />
    <Image
      children=""
      title="art.ginzburg | Instagram"
      // align="left"
      // width="22px"
      src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
    >
      https://lol.com
    </Image>
  </>
);

export default Readme;

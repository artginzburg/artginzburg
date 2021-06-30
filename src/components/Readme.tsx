// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-md
/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak, UnorderedList, Image } from 'jsx-md';
import pkg from '../../package.json';

const Readme: Component = () => (
  <>
    {pkg.description}
    <LineBreak />
    <LineBreak />
    <UnorderedList children={[]}>
      {'Is looking for collaboration'}
      {'Dives into bot development'}
      {'Also good at cinematography 📺'}
    </UnorderedList>
    <LineBreak />
    <Heading level={3}>Contacts</Heading>
    <LineBreak />
    <Image
      children="art.ginzburg | Instagram"
      // align="left"
      // width="22px"
      src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
    />
  </>
);

export default Readme;

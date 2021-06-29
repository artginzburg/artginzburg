// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-md
/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak, } from 'jsx-md';
import pkg from '../../package.json';
 
const Readme: Component = () => (
  <>
    <Heading level={1}>{pkg.name}</Heading>
    {pkg.description}
    <LineBreak />
  </>
);
 
export default Readme;
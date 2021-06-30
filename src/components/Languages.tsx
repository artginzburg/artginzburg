/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak, Heading } from 'jsx-md';

import OneLineList from './jsx-md/OneLineList';

function Languages() {
  return (
    <>
      <Heading level={3}>Languages</Heading>
      <OneLineList>
        {'English <sup>9/10</sup>'}
        {'Russian <sup>10/10</sup>'}
      </OneLineList>
      <LineBreak />
      <LineBreak />
      <OneLineList>
        {'JavaScript <sup>8/10</sup>'}
        {'Swift <sup>6/10</sup>'}
        {'Shell script <sup>6/10</sup>'}
      </OneLineList>
    </>
  );
}

export default Languages;

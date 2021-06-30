/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak, Heading } from 'jsx-md';

import OneLineList from './jsx-md/OneLineList';

function LifeSkills() {
  return (
    <>
      <Heading level={3}>Life skills</Heading>
      <OneLineList>
        <>Critical thinking</>
        <>Listening</>
        <>Making others think hard</>
      </OneLineList>
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default LifeSkills;

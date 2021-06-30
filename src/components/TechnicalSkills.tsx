/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak, Heading } from 'jsx-md';

import OneLineList from './jsx-md/OneLineList';

function TechnicalSkills() {
  return (
    <>
      <Heading level={3}>Technical skills</Heading>
      <OneLineList>
        <>Database management</>
        <>Statistical analysis</>
        <>User interface intuitive design</>
      </OneLineList>
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default TechnicalSkills;

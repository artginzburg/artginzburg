/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

export default props => {
  return (
    <>
      * {props.children}
      <LineBreak />
    </>
  );
};

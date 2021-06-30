/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak } from 'jsx-md';

export default props => (
  <>
    {props.style} {props.children}
    <LineBreak />
  </>
);

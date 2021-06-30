/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const LinkReference = props => (
  <>
    [{props.refName}]: {props.children}
  </>
);

export default LinkReference;

/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const Kbd = props => (
  <>
    {'<kbd>'}
    {props.children}
    {'</kbd>'}
  </>
);

export default Kbd;

/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const LinkWithLabel = props => (
  <>
    [{props.children}][{props.to}]
  </>
);

export default LinkWithLabel;

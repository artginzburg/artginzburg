/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

import UnorderedListItem from './UnorderedListItem';

const UnorderedList = props => (
  <>
    {props.children.map(prop => (
      <UnorderedListItem>{prop.props.children}</UnorderedListItem>
    ))}
  </>
);
export default UnorderedList;

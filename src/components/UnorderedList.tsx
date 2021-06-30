/* @jsx MD */
import MD, { UnorderedList } from 'jsx-md';

export default props => (
  <UnorderedList {...props} children={[]}>
    {props.children}
  </UnorderedList>
);

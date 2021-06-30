/* @jsx MD */
import MD, { UnorderedList } from 'jsx-md';

export default props => {
  const children = props.children.length ? props.children : [props.children];

  return (
    <UnorderedList {...props} children={[]}>
      {children}
    </UnorderedList>
  );
};

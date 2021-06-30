/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const defaults = {
  separator: ' · ',
};

const OneLineList = props => {
  props = {
    ...defaults,
    ...props,
  };

  const childrenMapped = props.children.map(prop => prop.props.children);
  const childrenJoined = childrenMapped.join(props.separator);

  return <>{childrenJoined}</>;
};

export default OneLineList;

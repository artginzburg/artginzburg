/* @jsx MD */
import MD from 'jsx-md';

import ListItem from './ListItem';

const defaults = {
  style: '>',
};

export default props => {
  props = {
    ...defaults,
    ...props,
  };
  return <ListItem style={props.style}>{props.children}</ListItem>;
};

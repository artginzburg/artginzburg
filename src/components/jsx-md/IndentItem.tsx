/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const defaults = {
  value: 1,
  indentation: ' ',
};

const IndentItem = props => {
  props = {
    ...defaults,
    ...props,
  };

  let indentation = '';
  for (let i = 0; i < props.value; i++) {
    indentation += props.indentation;
  }

  return (
    <>
      {indentation}
      {props.children}
    </>
  );
};

export default IndentItem;

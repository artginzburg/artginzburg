/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment } from 'jsx-md';

const Img = props => {
  const htmlifiedProps = [];
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const el = props[key];
      if (el !== undefined && el !== null) {
        htmlifiedProps.push(`${key}="${el}"`);
      }
    }
  }
  const finalProps = htmlifiedProps.join(' ');

  return <>{`<img ${finalProps}>`}</>;
};

export default Img;

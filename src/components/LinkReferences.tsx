/* @jsx MD */
import LinkReference from './LinkReference';
import MD, { LineBreak } from 'jsx-md';

function LinkReferences(props) {
  const links = props.children;
  const stringifiedLinks = [];
  for (const key in links) {
    if (Object.prototype.hasOwnProperty.call(links, key)) {
      const el = links[key];
      stringifiedLinks.push(<LinkReference refName={key}>{el}</LinkReference>);
      stringifiedLinks.push(<LineBreak />);
    }
  }
  stringifiedLinks.pop();
  return stringifiedLinks;
}

export default LinkReferences;

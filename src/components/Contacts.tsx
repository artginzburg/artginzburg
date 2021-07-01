/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const DefaultImg = props => <Img align="left" width="22px" {...props} />;

const DefaultLinkWithLabel = props => (
  <>
    <LinkWithLabel to={props.to}>
      <DefaultImg title={props.title} src={props.src} />
    </LinkWithLabel>
    <LineBreak />
  </>
);

const contacts = [
  {
    to: 'instagram',
    title: 'art.ginzburg',
    src: 'assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png',
  },
  {
    to: 'steam',
    title: 'artginzburg',
    src: 'upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png',
  },
  {
    to: 'telegram',
    title: 'ginzburgart',
    src: 'upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png',
  },
];

function Contacts() {
  return (
    <>
      <Heading level={3}>Contacts</Heading>

      {contacts.map(contact => {
        const capitalizedTo = capitalizeFirstLetter(contact.to);
        contact = {
          ...contact,
          title: `${contact.title} | ${capitalizedTo}`,
          src: `https://${contact.src}`,
        };
        return <DefaultLinkWithLabel {...contact} />;
      })}

      <LineBreak />
      <Br />
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default Contacts;

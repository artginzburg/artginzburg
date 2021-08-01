/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const DefaultImg = (props) => <Img align="left" width="22px" {...props} />;

const DefaultLinkWithLabel = (props) => (
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
    src: 'i.dlpng.com/static/png/6533778_preview.png',
  },
  {
    to: 'steam',
    title: 'artginzburg',
    src: 'toppng.com/public/uploads/thumbnail/ow-white-steam-icon-115629259929xjnhjlwag.png',
  },
  {
    to: 'telegram',
    title: 'ginzburgart',
    src: 'upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/2048px-Telegram_X_2019_Logo.svg.png',
  },
];

function Contacts() {
  return (
    <>
      <Heading level={3}>Contacts</Heading>

      {contacts.map((contact) => {
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

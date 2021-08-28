/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const DefaultImg = (props) => <Img width="21px" {...props} />;

const DefaultLinkWithLabel = (props) => (
  <>
    <LinkWithLabel to={props.to}>
      <DefaultImg title={props.title} src={props.src} />
      {`<sup> ${props.label} </sup>`}
    </LinkWithLabel>
    {props.drawSeparatorAfter && '<sup> · </sup>'}
    <LineBreak />
  </>
);

const contacts = [
  {
    to: 'instagram',
    title: 'art.ginzburg',
    src: 'i.dlpng.com/static/png/6533778_preview.png',
    label: 'Photos',
  },
  {
    to: 'mustapp',
    title: 'artginzburg',
    src: 'mustapp.com/static/images/logo_icon.svg',
    label: 'Films',
  },
  {
    to: 'steam',
    title: 'artginzburg',
    src: 'toppng.com/public/uploads/thumbnail/ow-white-steam-icon-115629259929xjnhjlwag.png',
    label: 'Games',
  },
];

function Socials() {
  return (
    <>
      <Heading level={3}>Socials</Heading>

      {contacts.map((contact, index) => {
        const capitalizedTo = capitalizeFirstLetter(contact.to);
        contact = {
          ...contact,
          title: `${contact.title} | ${capitalizedTo}`,
          src: `https://${contact.src}`,
        };
        return (
          <DefaultLinkWithLabel {...contact} drawSeparatorAfter={index < contacts.length - 1} />
        );
      })}
    </>
  );
}

export default Socials;

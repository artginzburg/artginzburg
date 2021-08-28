/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const telegramContact = {
  to: 'telegram',
  title: 'ginzart',
};

function Contacts() {
  return (
    <>
      ---
      <LineBreak />
      <LineBreak />
      Contact me: {'<sub> <sub> '}
      <LinkWithLabel to={telegramContact.to}>
        <Img
          title={`${telegramContact.title} | ${capitalizeFirstLetter(telegramContact.to)}`}
          src={`https://img.shields.io/static/v1?style=flat&message=${telegramContact.title}&color=black&labelColor=rgba(0,0,0,0)&logo=${telegramContact.to}&label=`}
        />
      </LinkWithLabel>
      {'</sub></sub>'}
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default Contacts;

/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

function Contacts() {
  return (
    <>
      <Heading level={3}>Contacts</Heading>
      <LinkWithLabel to="instagram">
        <Img
          align="left"
          title="art.ginzburg | Instagram"
          width="22px"
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
        />
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="steam">
        <Img
          align="left"
          title="artginzburg | Steam"
          width="22px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png"
        />
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="telegram">
        <Img
          align="left"
          title="ginzburgart | Telegram"
          width="22px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"
        />
      </LinkWithLabel>
      <LineBreak />
      <LineBreak />
      <Br />
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default Contacts;

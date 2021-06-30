/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak } from 'jsx-md';

import pkg from '../../package.json';

import links from '../utils/links';

import UnorderedListItem from './UnorderedListItem';
import Img from './Img';
import LinkWithLabel from './LinkWithLabel';
import Br from './Br';

function renderLinks() {
  const stringifiedLinks = [];
  for (const key in links) {
    if (Object.prototype.hasOwnProperty.call(links, key)) {
      const el = links[key];
      stringifiedLinks.push(`[${key}]: ${el}`);
      stringifiedLinks.push(<LineBreak />);
    }
  }
  stringifiedLinks.pop();
  return stringifiedLinks;
}

const Readme: Component = () => (
  <>
    {pkg.description}
    <LineBreak />
    <LineBreak />
    <UnorderedListItem>Is looking for collaboration</UnorderedListItem>
    <UnorderedListItem>Dives into bot development</UnorderedListItem>
    <UnorderedListItem>Also good at cinematography 📺</UnorderedListItem>
    <LineBreak />
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
    <Heading level={3}>Languages and Tools</Heading>
    <LinkWithLabel to="vscode">
      <Img
        align="left"
        title="Visual Studio Code"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="html">
      <Img
        align="left"
        title="HTML5"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="css">
      <Img
        align="left"
        title="CSS3"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="js">
      <Img
        align="left"
        title="JavaScript"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="react">
      <Img
        align="left"
        title="React"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="nodejs">
      <Img
        align="left"
        title="Node.js"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <LinkWithLabel to="mongo">
      <Img
        align="left"
        title="MongoDB"
        width="26px"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
      />
    </LinkWithLabel>
    <LineBreak />
    <Img
      align="left"
      title="ShellScript"
      width="26px"
      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
    />
    <LineBreak />
    <LineBreak />
    <Br />
    <LineBreak />
    <LineBreak />
    <Heading level={3}>Education</Heading>
    <UnorderedListItem>
      <LinkWithLabel to="yapraktikum">Yandex.Praktikum</LinkWithLabel> | Jan, 2021 - Current
      <LineBreak />
      <LineBreak />
      {'  > '}
      Web-Developer &amp;nbsp;&nbsp;
      {'<kbd>'}
      <LinkWithLabel to="yapraktikum-webdev-portfolio">Portfolio</LinkWithLabel>
      {'</kbd>'}
      <LineBreak />
    </UnorderedListItem>
    <UnorderedListItem>
      <LinkWithLabel to="ibdp">
        International Baccalaureate® (IB) Diploma Programme (DP)
      </LinkWithLabel>{' '}
      | Sep, 2018 - Jun, 2020
      <LineBreak />
      <LineBreak />
      {'  > '}
      Film · Computer Science · Business & Management
      <LineBreak />
    </UnorderedListItem>
    <Heading level={3}>Technical skills</Heading>
    Database management · Statistical analysis · User interface intuitive design
    <LineBreak />
    <LineBreak />
    <Heading level={3}>Life skills</Heading>
    Critical thinking · Listening · Making others think hard
    <LineBreak />
    <LineBreak />
    <Heading level={3}>Languages</Heading>
    {'English <sup>9/10</sup> · Russian <sup>10/10</sup>'}
    <LineBreak />
    <LineBreak />
    {'JavaScript <sup>8/10</sup> · Swift <sup>6/10</sup> · Shell script <sup>6/10</sup>'}
    <LineBreak />
    <LineBreak />
    <Br />
    <LineBreak />
    <Br />
    <LineBreak />
    <LineBreak />
    ---
    <LineBreak />
    <LineBreak />
    {renderLinks()}
    <LineBreak />
  </>
);

export default Readme;

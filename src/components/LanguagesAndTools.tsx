/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

function LanguagesAndTools() {
  return (
    <>
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
    </>
  );
}

export default LanguagesAndTools;

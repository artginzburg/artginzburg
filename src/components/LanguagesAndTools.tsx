/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak, Image } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import Img from './jsx-md/Img';
import Br from './jsx-md/Br';

function LanguagesAndTools() {
  const eyeImageSrc = 'https://media4.giphy.com/media/dUrFXgPZ90kVeok5rm/giphy.gif?cid=790b7611720de95ddc4288a31d15a3972003510f262a0104&rid=giphy.gif&ct=s';

  return (
    <>
      <Heading level={3}>Tech</Heading>
      <LinkWithLabel to="html">
        ![HTML](https://img.shields.io/badge/-HTML-eee?style=for-the-badge&logo=html5&logoColor=000)
      </LinkWithLabel>
      <LineBreak />
      ![Git](https://img.shields.io/badge/-git-222?style=for-the-badge&logo=git&logoColor=fff)
      <LineBreak />
      <LinkWithLabel to="css">
        ![CSS](https://img.shields.io/badge/-CSS-eee?style=for-the-badge&logo=css3&logoColor=000)
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="js">
        ![TS](https://img.shields.io/badge/-TS-222?style=for-the-badge&logo=typescript&logoColor=fff)
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="react">
        ![ReactJs](https://img.shields.io/badge/-ReactJs-eee?style=for-the-badge&logo=react&logoColor=000)
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="nodejs">
        ![NodeJs](https://img.shields.io/badge/-Node.js-222?style=for-the-badge&logo=node.js&logoColor=fff)
      </LinkWithLabel>
      <LineBreak />
      <LinkWithLabel to="mongo">
        ![MongoDB](https://img.shields.io/badge/-MongoDB-eee?style=for-the-badge&logo=mongodb&logoColor=000)
      </LinkWithLabel>
      <LineBreak />
      <LineBreak />
      ![PUG](https://img.shields.io/badge/-pug-eee?style=for-the-badge&logo=pug&logoColor=000)
      <LineBreak />
      ![Sass](https://img.shields.io/badge/-Sass-222?style=for-the-badge&logo=sass&logoColor=fff)
      <LineBreak />
      ![BEM](https://img.shields.io/badge/-bem-eee?style=for-the-badge&logo=BEM&logoColor=000)
      <LineBreak />
      ![Figma](https://img.shields.io/badge/-figma-222?style=for-the-badge&logo=figma&logoColor=fff)
      <LineBreak />
      <Br />
      <LineBreak />
      <LineBreak />
      <Img
        width="60"
        src={eyeImageSrc}
      />
      <Img
        width="66"
        src={eyeImageSrc}
      />
      <Img
        width="60"
        src={eyeImageSrc}
      />
      <LineBreak />
      <LineBreak />
    </>
  );
}

export default LanguagesAndTools;

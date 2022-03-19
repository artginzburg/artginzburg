/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import UnorderedListItem from './jsx-md/UnorderedListItem';
import QuoteBlockListItem from './jsx-md/QuoteBlockListItem';
import IndentItem from './jsx-md/IndentItem';
import Kbd from './jsx-md/Kbd';

function Work() {
  return (
    <>
      <Heading level={3}>Work</Heading>

      <UnorderedListItem>
        <LinkWithLabel to="datarubrik">Data Rubrik</LinkWithLabel> | Nov, 2021 - Current
        <LineBreak />
        <LineBreak />
        <IndentItem value="2">
          <QuoteBlockListItem>
            Back-end & Front-end Web-Developer &amp;nbsp;&nbsp;
            <Kbd>
              Secret project
            </Kbd>
          </QuoteBlockListItem>
        </IndentItem>
      </UnorderedListItem>
    </>
  );
}

export default Work;

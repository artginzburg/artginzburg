/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import UnorderedListItem from './jsx-md/UnorderedListItem';
import QuoteBlockListItem from './jsx-md/QuoteBlockListItem';
import OneLineList from './jsx-md/OneLineList';
import IndentItem from './jsx-md/IndentItem';

function Education() {
  return (
    <>
      <Heading level={3}>Education</Heading>

      <UnorderedListItem>
        <LinkWithLabel to="yapraktikum">Yandex.Praktikum</LinkWithLabel> | Jan, 2021 - Current
        <LineBreak />
        <LineBreak />
        <IndentItem value="2">
          <QuoteBlockListItem>
            Web-Developer &amp;nbsp;&nbsp;
            {'<kbd>'}
            <LinkWithLabel to="yapraktikum-webdev-portfolio">Portfolio</LinkWithLabel>
            {'</kbd>'}
          </QuoteBlockListItem>
        </IndentItem>
      </UnorderedListItem>

      <UnorderedListItem>
        <LinkWithLabel to="ibdp">
          International Baccalaureate® (IB) Diploma Programme (DP)
        </LinkWithLabel>{' '}
        | Sep, 2018 - Jun, 2020
        <LineBreak />
        <LineBreak />
        <IndentItem value="2">
          <QuoteBlockListItem>
            <OneLineList>
              <>Film</>
              <>Computer Science</>
              <>Business & Management</>
            </OneLineList>
          </QuoteBlockListItem>
        </IndentItem>
      </UnorderedListItem>
    </>
  );
}

export default Education;

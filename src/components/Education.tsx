/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import UnorderedListItem from './jsx-md/UnorderedListItem';
import QuoteBlockListItem from './jsx-md/QuoteBlockListItem';
import OneLineList from './jsx-md/OneLineList';

function Education() {
  return (
    <>
      <Heading level={3}>Education</Heading>
      <UnorderedListItem>
        <LinkWithLabel to="yapraktikum">Yandex.Praktikum</LinkWithLabel> | Jan, 2021 - Current
        <LineBreak />
        <LineBreak />
        {'  '}
        <QuoteBlockListItem>
          Web-Developer &amp;nbsp;&nbsp;
          {'<kbd>'}
          <LinkWithLabel to="yapraktikum-webdev-portfolio">Portfolio</LinkWithLabel>
          {'</kbd>'}
        </QuoteBlockListItem>
      </UnorderedListItem>
      <UnorderedListItem>
        <LinkWithLabel to="ibdp">
          International Baccalaureate® (IB) Diploma Programme (DP)
        </LinkWithLabel>{' '}
        | Sep, 2018 - Jun, 2020
        <LineBreak />
        <LineBreak />
        {'  '}
        <QuoteBlockListItem>
          <OneLineList>
            <>Film</>
            <>Computer Science</>
            <>Business & Management</>
          </OneLineList>
        </QuoteBlockListItem>
      </UnorderedListItem>
    </>
  );
}

export default Education;

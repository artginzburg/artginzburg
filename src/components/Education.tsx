/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, Heading, LineBreak } from 'jsx-md';

import LinkWithLabel from './jsx-md/LinkWithLabel';
import UnorderedListItem from './jsx-md/UnorderedListItem';
import QuoteBlockListItem from './jsx-md/QuoteBlockListItem';
import OneLineList from './jsx-md/OneLineList';
import IndentItem from './jsx-md/IndentItem';
import Kbd from './jsx-md/Kbd';

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
            <Kbd>
              <LinkWithLabel to="yapraktikum-webdev-portfolio">Portfolio</LinkWithLabel>
            </Kbd>
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
              <>Business & Management </>
            </OneLineList>
            &amp;nbsp;&nbsp;
            <Kbd>
              {'<a href="https://artginzburg.github.io/CASProject/">'}
              CAS Project
              {'</a>'}
            </Kbd>
          </QuoteBlockListItem>
        </IndentItem>
      </UnorderedListItem>
    </>
  );
}

export default Education;

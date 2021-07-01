/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Fragment, LineBreak, Heading } from 'jsx-md';

import OneLineList from './jsx-md/OneLineList';

const MAXIMUM_RATING = 10;

const languages = {
  speaking: {
    English: 9,
    Russian: 10,
  },
  coding: {
    JavaScript: 8,
    Swift: 6,
    'Shell script': 6,
  },
};

function createElementsList(sector) {
  const elementsList = [];
  const object = languages[sector];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const el = object[key];
      elementsList.push(`${key} <sup>${el}/${MAXIMUM_RATING}</sup>`);
    }
  }
  return elementsList;
}

function Languages() {
  return (
    <>
      <Heading level={3}>Languages</Heading>

      <OneLineList>{createElementsList('speaking')}</OneLineList>

      <LineBreak />
      <LineBreak />

      <OneLineList>{createElementsList('coding')}</OneLineList>
    </>
  );
}

export default Languages;

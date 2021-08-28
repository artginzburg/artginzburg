/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment } from 'jsx-md';

import Header from './Header';
import Footer from './Footer';
import Contacts from './Contacts';
import LanguagesAndTools from './LanguagesAndTools';
import Education from './Education';
// import TechnicalSkills from './TechnicalSkills';
import LifeSkills from './LifeSkills';
import Socials from './Socials';
// import Languages from './Languages';

const Readme: Component = () => (
  <>
    <Header />
    <Contacts />
    <LanguagesAndTools />
    <Education />
    {/* <TechnicalSkills /> */}
    <LifeSkills />
    <Socials />
    {/* <Languages /> */}
    <Footer />
  </>
);

export default Readme;

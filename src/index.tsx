// We need to tell the JSX transpiler that in this file, instead of React we use the custom createElement and Fragment functions from jsx-md
/* @jsx MD */
import MD, { render } from 'jsx-md';
import { writeFileSync } from 'fs';

import Readme from './components/Readme';

async function writeReadme() {
  writeFileSync('readme.md', await render(<Readme />));
}

void writeReadme();

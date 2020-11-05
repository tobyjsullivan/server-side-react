import React from 'react';
import {hydrate} from 'react-dom';

import App from './App';
import {ROOT_NODE_ID} from './hydrationConstants';

const $app = document.getElementById(ROOT_NODE_ID);
hydrate(<App />, $app);

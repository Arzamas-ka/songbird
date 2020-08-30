import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import 'bootswatch/dist/slate/bootstrap.min.css';
import './index.css';

console.log(`
- аудиоплеер кастомный
- создание и использование собственной коллекции данных
- звуковая индикация правильного/неправильного ответа
- поздравление с абсолютной победой
`,
);

ReactDOM.render(<App />, document.getElementById('root'));

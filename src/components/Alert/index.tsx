import { createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom';

import AlertWeb, { IAlertShow } from './Platform/Web';

interface IAlert {
  show: (params: IAlertShow) => void;
}

const Alert: IAlert = {
  show: (params: IAlertShow) => {
    const getElement: any = () => {
      return createElement(AlertWeb, { ...params, key: uuidv4() });
    };

    ReactDOM.render(getElement(), document.getElementById('alerts'));
  },
};

export default Alert;

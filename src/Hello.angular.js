import ng from 'angular';
import { react2angular } from 'react2angular';
import { Hello } from './Hello';

export const ngHelloComponent = ng
  .module('helloComponent', [])
  .component('helloComponent', react2angular(Hello, ['value'])).name;

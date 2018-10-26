import ng from 'angular';
import { ngHelloComponent } from './Hello.angular';

const root = document.createElement('div');
root.setAttribute('ng-app', 'app');

const someComponent = document.createElement('some-component');
root.appendChild(someComponent);

document.body.appendChild(root);

ng.module('app', [ngHelloComponent]).component('someComponent', {
  template: `
    <div>
      <p>
        <button ng-click="vm.setNextValue()">setNextValue</button>
      </p>
      <div class="component-box">
        <i>angular component</i>
        <p>True value: {{vm.value.name}}</p>
      </div>
      <div class="component-box">
        <i>react component</i>
        <hello-component value="vm.value"></hello-component>
      </div>

      <div class="component-box">
        <i>true value</i>
        <pre>{{vm.getValueJson()}}</pre>
      </div>
    </div>
  `,
  controller: function() {
    const ctrl = this;
    ctrl.value = {};
    const names = ['one', 'two', 'three'];
    let currentIndex = 0;

    const setNewValue = () => {
      ctrl.value.name = names[currentIndex++];
    };

    setNewValue();

    ctrl.setNextValue = function() {
      ctrl.value.name = names[currentIndex++ % names.length];
      console.log(ctrl.value);
    };

    ctrl.getValueJson = () => {
      return JSON.stringify(ctrl.value, null, 2);
    };
  },
  controllerAs: 'vm'
});

///<reference path="../typings/index.d.ts"/>

import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic'
import MaskedInput from '../src/angular2TextMask'

@Component({
  selector: 'app',
  templateUrl: 'app.html',
  directives: [MaskedInput]
})
class AppComponent {}

bootstrap(AppComponent);

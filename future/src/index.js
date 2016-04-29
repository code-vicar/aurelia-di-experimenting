import { Container, Factory } from 'aurelia-dependency-injection'

import './configure'

import thingOneFactoryKey from './thingOneFactory'

const thingOneFactory = Container.instance.get(Factory.of(thingOneFactoryKey))
const thingOne = new thingOneFactory('hello')

console.log(thingOne)

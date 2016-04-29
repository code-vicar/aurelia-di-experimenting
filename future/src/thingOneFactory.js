import { Container, inject, factory } from 'aurelia-dependency-injection'
import settings from './settings'

@inject(settings)
export default class thingOneFactory {
    constructor(settings, data) {
        this.settings = settings
        this.data = data
    }
}

Container.instance.autoRegister(thingOneFactory)

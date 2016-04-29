import { Container } from 'aurelia-dependency-injection'

export default function settings() {
    return {
        'just': 'some',
        'test': 'settings'
    }
}

Container.instance.autoRegister(settings)

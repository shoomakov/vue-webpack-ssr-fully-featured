import Proxy from './Proxy'

class ExampleProxy extends Proxy {
    /**
     * The constructor for the ExampleProxy.
     *
     * @param {Object} parameters The query parameters.
     */
    constructor (parameters = {}) {
        super('/v1/auth', parameters)
    }

}

export default ExampleProxy


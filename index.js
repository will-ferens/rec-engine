class Unit {
    constructor(entity, properties) {
        this.entity = entity

        this.load(properties || {})
    }

    load(properties) {

        let props = Object.create(null)

        Object.keys(properties).forEach(function(value) {
            props[value] = properties[value]
        })

        this.properties = props

        return this
    }

    set(property, value) {
        return this.properties[property] = value
    }

    unset(property) {
        return delete this.properties[property]
    }

    has(property) {
        return Object.prototype.hasOwnProperty.call(this.properties, property)
    }

    get(property) {
        return this.properties[property]
    }

    toString() {
        return [this.constructor.name, ' (', this.entity, ' ', JSON.stringify(this.properties) ,')'].join('')
    }

}



module.exports = Unit
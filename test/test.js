const Unit = require('../index')
const { expect } = require('chai')

describe('Unit', function() {
    it('creates unit based on entity', function() {
        var unit = new Unit('node', {user: 'Will'})
        
        expect(unit.entity).to.equal('node')
        expect(unit.properties.user).to.equal('Will')
    })

})
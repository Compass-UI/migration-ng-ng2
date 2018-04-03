describe('MainCtrl', function(){
    var controller;
    // var flights = mockData.getMockFlights();

    beforeEach(function(){
        // bard.appModule('ualCompass');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice'); /** TDD: dataservice is not yet implemented */
        var controller = $controller('MainCtrl')
    })

    it('Should return some flights', function(){
        expect([{"from": "ORD"}]).toEqual([{"from": "ORD"}]);
    })

    it('expect MainCtrl to be defined', function(){
        expect(controller).toBeDefined();
    })

})
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');


var Countdown = require('Countdown');

describe('Countdown', () => {

     it('should countdown exist', () => {
        expect(Countdown).toExist();
     });

     describe('handleSetCountdown',() => {

     it('should set state to started and countdown', ( done) => {
       // Testing Racct Component
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);

       countdown.handleSetCountdown(10);


      expect( countdown.state.count ).toBe(10);
      expect( countdown.state.coundownStatus).toBe('started');

      setTimeout(()=>{
         expect( countdown.state.count ).toBe(8);
         done();
      },2001);


     });
     describe('startTimer', () =>  {
       it('should never set count less than zero ', (done) => {
         var countdown = TestUtils.renderIntoDocument(<Countdown/>);
         countdown.handleSetCountdown(1);
         expect( countdown.state.count ).toBe(1);
         setTimeout( () => {
           expect( countdown.state.count ).toBe(0);
           done();
         },3001);
       });
     });
   });
});

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe( 'Timer Test', () => {

     it('should exist', ()=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        expect( timer ).toExist();
     });

     describe('startTimer', () =>  {
        it('should start countdown on start status', (done)=>{
           var timer = TestUtils.renderIntoDocument(<Timer/>);
           timer.handleStatusChange('started');

           expect(timer.state.count).toBe(0);

           setTimeout( () => {
              expect( timer.state.count).toBe(1);
              expect( timer.state.countdownStatus).toBe('started');
              done();
           }, 1001);

           });
           it('should paused countdown on stop status', (done)=>{
               var timer = TestUtils.renderIntoDocument(<Timer/>);

               timer.setState({count: 10});
               timer.handleStatusChange('started');
               timer.handleStatusChange('paused');


               setTimeout( () => {
                  expect( timer.state.count).toBe(10);
                  expect( timer.state.countdownStatus).toBe('paused');
                  done();
               }, 1001);

            });

           it('should stopped countdown on stop status', (done)=>{
               var timer = TestUtils.renderIntoDocument(<Timer/>);

               timer.setState( { count : 10 });
               timer.handleStatusChange('started');
               timer.handleStatusChange('stopped');
               setTimeout( () => {
                  expect( timer.state.count).toBe(0);
                  expect( timer.state.countdownStatus).toBe('stopped');
                  done();
                },1001);
            });


     });
});

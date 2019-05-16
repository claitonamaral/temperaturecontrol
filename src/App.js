
import React, { Component } from 'react';
import './App.css';

class App extends Component{
    
  constructor(props){
    super(props);

    this.beer1 = {tasks:[{ type1:'Pilsner', refrigerationmin1:-4, refrigerationmax1:-6 }]}
    this.beer2 = {tasks:[{ type2:'IPA', refrigerationmin2:-5, refrigerationmax2:-6 }]}    
    this.beer3 = {tasks:[{ type3:'Lager', refrigerationmin3:-4, refrigerationmax3:-7 }]}
    this.beer4 = {tasks:[{ type4:'Stout', refrigerationmin4:-6, refrigerationmax4:-8 }]}
    this.beer5 = {tasks:[{ type5:'Wheat beer', refrigerationmin5:-3, refrigerationmax5:-5 }]}
    this.beer6 = {tasks:[{ type6:'Pale Ale', refrigerationmin6:-4, refrigerationmax6:-6 }]}    
  }
  
  render() {

    var numbers=[];
    var container1 = [-4,-5,-6];
    var container2 = [-5,-6];
    var container3 = [-4,-5,-6,-7];
    var container4 = [-6,-7,-8];
    var container5 = [-3,-4,-5];
    var container6 = [-4,-5,-6];    

    var sensor1 = Math.floor(Math.random() * -6) - 4;
    var sensor2 = Math.floor(Math.random() * -7) - 4;
    var sensor3 = Math.floor(Math.random() * -8) - 4;
    var sensor4 = Math.floor(Math.random() * -9) - 5;
    var sensor5 = Math.floor(Math.random() * -4) - 3;
    var sensor6 = Math.floor(Math.random() * -5) - 2;
    
    if( container1.indexOf(sensor1) < 0) { numbers.push('  Pilsner') }  
    if( container2.indexOf(sensor2) < 0) { numbers.push('  IPA') }  
    if( container3.indexOf(sensor3) < 0) { numbers.push('  Lager') }  
    if( container4.indexOf(sensor4) < 0) { numbers.push('  Stout') }  
    if( container5.indexOf(sensor5) < 0) { numbers.push('  Wheat beer') }  
    if( container6.indexOf(sensor6) < 0) { numbers.push('  Pale Ale') }   

    return (
      
      <div>
      <br/>
      <h1>
        <span class=""></span>Refrigerated Truck <span class="blue"></span> 
        <span class="yellow">Temperature Control (C°)</span> 
      </h1>  
      <br/>
      <h3>
        <span class="verify">Verify temperature of containers:&nbsp;&nbsp;</span>
        <span class="sensor">&nbsp;&nbsp;{ numbers.toString() }&nbsp;&nbsp;</span> 
      </h3>

      <table class="container">
      <thead>
        <tr>
          <th><h2>Containers</h2></th>
          <th colSpan='2'><h2>Specific Refrigeration</h2></th>          
          <th><h2>Current Temperature</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ this.beer1.tasks.map((task) => <normal>{ task.type1 }</normal>) }</td>
          <td>{ this.beer1.tasks.map((task) => <normal>{ task.refrigerationmin1 }</normal>) }</td>
          <td>{ this.beer1.tasks.map((task) => <normal>{ task.refrigerationmax1 }</normal>) }</td>
          <td>{ sensor1 }</td>
        </tr>
        <tr>
          <td>{ this.beer2.tasks.map((task) => <normal>{ task.type2 }</normal>) }</td>
          <td>{ this.beer2.tasks.map((task) => <normal>{ task.refrigerationmin2 }</normal>) }</td>
          <td>{ this.beer2.tasks.map((task) => <normal>{ task.refrigerationmax2 }</normal>) }</td>
          <td>{ sensor2 }</td>
        </tr>
        <tr>
          <td>{ this.beer3.tasks.map((task) => <normal>{ task.type3 }</normal>) }</td>
          <td>{ this.beer3.tasks.map((task) => <normal>{ task.refrigerationmin3 }</normal>) }</td>
          <td>{ this.beer3.tasks.map((task) => <normal>{ task.refrigerationmax3 }</normal>) }</td>
          <td>{ sensor3 }</td>
        </tr>
        <tr>
          <td>{ this.beer4.tasks.map((task) => <normal>{ task.type4 }</normal>) }</td>
          <td>{ this.beer4.tasks.map((task) => <normal>{ task.refrigerationmin4 }</normal>) }</td>
          <td>{ this.beer4.tasks.map((task) => <normal>{ task.refrigerationmax4 }</normal>) }</td>
          <td>{ sensor4 }</td>
        </tr>
        <tr>
          <td>{ this.beer5.tasks.map((task) => <normal>{ task.type5 }</normal>) }</td>
          <td>{ this.beer5.tasks.map((task) => <normal>{ task.refrigerationmin5 }</normal>) }</td>
          <td>{ this.beer5.tasks.map((task) => <normal>{ task.refrigerationmax5 }</normal>) }</td>
          <td>{ sensor5 }</td>
        </tr>
        <tr>
          <td>{ this.beer6.tasks.map((task) => <normal>{ task.type6 }</normal>) }</td>
          <td>{ this.beer6.tasks.map((task) => <normal>{ task.refrigerationmin6 }</normal>) }</td>
          <td>{ this.beer6.tasks.map((task) => <normal>{ task.refrigerationmax6 }</normal>) }</td>
          <td>{ sensor6 }</td>
        </tr>
      </tbody>
      </table>

      </div>
    );
  }
}

export default App;

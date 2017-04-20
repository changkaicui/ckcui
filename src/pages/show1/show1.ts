import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Show1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-show1',
  templateUrl: 'show1.html',
})
export class Show1 {
  userList:Array<any>
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.userList = 
    [
      {no:"001",name:"kate",sex:"male"},
      {no:"006",name:"tom",sex:"female"},
      {no:"009",name:"jack",sex:"male"},
      {no:"004",name:"frack",sex:"female"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Show1');
  }
  
  SortListASC()
  {
    this.userList.sort(function(a,b){return a.no-b.no});
  }

  SortListDESC()
  {
    this.userList.sort(function(a,b){return b.no-a.no});
  }

  SortListRANDOM()
  {
    let number1 = Math.random()*10;
    let number2 = Math.random()*10;
    this.userList.sort(function(a,b){return number1*a.no-number2*b.no});
  }

}
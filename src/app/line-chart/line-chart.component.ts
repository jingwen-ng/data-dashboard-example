import { Component, OnInit } from '@angular/core';
import Likedata from '../../Likedata'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartType = "line"
  chartData = []
 
  chartLabels = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let LikeCount = {}
    let MonthCount = {}
    let month = {}
    for( let like of Likedata){
      // x = (LikeCount[like.tags] * like.likes * 3) //like.likes get the number of likes
      // console.log(x) 


      for (let i = 0; i < 3; i++) {
      
        
         if(!LikeCount[like.tags[i]]){
          LikeCount[like.tags[i]] = 0
        }
         LikeCount[like.tags[i]] = LikeCount[like.tags[i]] + 1 //group the tag by calculating the tag no.
        
      }
      //  console.log(like.dateAdded)
      


       if(!MonthCount[like.dateAdded]){
        MonthCount[like.dateAdded] = 0
      }
      const getMonth = new Date (like.dateAdded);
       
      MonthCount = getMonth.getMonth();
     console.log(MonthCount)
      // MonthCount[like.dateAdded] = MonthCount[like.dateAdded] + 1
      

      //  LikeCount = month
      //  if (month == "Jan") {
      //   month = 1
      //   }
    
        
    }

    let imgCount = {}

    this.chartLabels = Object.keys(month)
    for( let j of Object.keys(LikeCount)){
  
      dataset.push(LikeCount[j])
    }
    this.chartData.push({
      data: dataset
    })
    // debugger
  }


}

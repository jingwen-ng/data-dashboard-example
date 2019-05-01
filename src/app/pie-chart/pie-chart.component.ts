import { Component, OnInit } from '@angular/core';
import Likedata from '../../Likedata'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartType = "pie"
  chartData = []
  // [
  //  { data: [1,2,3,4]} 
  // ]
  chartLabels = []
  // ["Avengers", "Frozen", "The Incredibles", "Justice League"] 

  constructor() { }

  ngOnInit() {  
    let dataset = []
    let LikeCount = {}
    let x = 0
    let tagLikes = {
      // tagLabel: numberOfLikesForTag
    }
    
    for( let like of Likedata){
      x = (LikeCount[like.tags] * like.likes * 3) //like.likes get the number of likes
      console.log(x) 


      for (let i = 0; i < 3; i++) {
      
        
         if(!LikeCount[like.tags[i]]){
          LikeCount[like.tags[i]] = 0
        }
         LikeCount[like.tags[i]] = LikeCount[like.tags[i]] + 1 //group the tag by calculating the tag no.
        
      }
      // x =like.likes
    //console.log(x)  
        // if(!LikeCount[like.likes]){
        //     LikeCount[like.like] = 0
            
        //   }
        //    x = LikeCount[like.likes]*LikeCount[like.tags] //group the tag by calculating the tag no.
        //   // LikeCount[like.likes] += LikeCount[like.likes[i]]
          

       
    }

//     let sumLikes = {}
//     // {
//     //   inspiron: [profits, profits, profits],
//     //   xps: [profits, profits, profits],
//     //   latitude: [profits, profits, profits]
//     // }
//     this.chartLabels = Object.keys(LikeCount)
//     for(let likes of Object.keys(LikeCount)){
//       for(let tags in LikeCount[likes]){
//         if(!sumLikes[tags]){
//           sumLikes[tags] = []
//         }
//         sumLikes[tags].push(sumLikes[likes][tags])
//       }
//     }
//     console.log(sumLikes)
// debugger
   

    // for( let like of Likedata){
    //   if(!LikeCount[like.likes]){
    //     LikeCount[like.likes] = 0
    //   }
     
    //   const totalLike = LikeCount[like.likes] + LikeCount[like.likes]
    // }
    // console.log(dataset)
    this.chartLabels = Object.keys(LikeCount)
    for( let j of Object.keys(LikeCount)){
  
      dataset.push(LikeCount[j])
    }
    this.chartData.push({
      data: dataset
    })
    // debugger
  }

}



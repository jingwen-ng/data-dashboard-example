import { Component, OnInit } from '@angular/core';
import Likedata from '../../Likedata'

@Component({
  selector: 'app-pie-chart-images',
  templateUrl: './pie-chart-images.component.html',
  styleUrls: ['./pie-chart-images.component.css']
})
export class PieChartImagesComponent implements OnInit {
  chartType = "pie"
  chartData = []
 
  chartLabels = []


  constructor() { }

  ngOnInit() {
    let dataset = []
    let ImageCount = {}

    
    for( let images of Likedata){

      for (let i = 0; i < 3; i++) {
      
        
         if(!ImageCount[images.tags[i]]){
          ImageCount[images.tags[i]] = 0
        }
        ImageCount[images.tags[i]]  += 1 //group the tag by calculating the tag no.
          
        
      }

      
      // LikeCount[preference.tags] += 1 

      // if(!LikeCount[preference.likes]){
      //   LikeCount[preference.likes] = 0
      // }
      // LikeCount[preference.likes] += 1
      // const totalLike = LikeCount[preference.likes] + LikeCount[preference.likes]
      // console.log(totalLike)


     
// console.log(dataset)
       
    }

    console.log(ImageCount)

    // for( let like of Likedata){
    //   if(!LikeCount[like.likes]){
    //     LikeCount[like.likes] = 0
    //   }
     
    //   const totalLike = LikeCount[like.likes] + LikeCount[like.likes]
    // }
    // console.log(dataset)
    this.chartLabels = Object.keys(ImageCount)
    for( let img of Object.keys(ImageCount)){
      
      dataset.push(ImageCount[img])
    }
    this.chartData.push({
      data: dataset
    })
    debugger

  }

}

// 1). creating of a class
class Vehicle{
    tyres = 4
    brakes = "quick"
    chairs = " comfortable"

    static engine = "Loud"
}

// accessing an object
const car = new Vehicle()
console.log(car.tyres)
// accessing a class
console.log(Vehicle.engine)

// 2).using Es6+ classes to sompute descriptive statistics
class DescStat{
    constructor(array){
        this.array = array
        this.sum = 0 
    }

        calculateMean(){
            for(this.i=0; this.i<this.array.length;this.i++){
                this.sum = this.array[this.i]+this.sum   
            }
            return(this.sum/this.array.length)      
        }   

        calculateMedian(){
            const sort_array= this.array.sort((a,b)=>(a-b))
            const mid_array = Math.floor(sort_array.length/2)

            if (sort_array.length % 2 === 0){
                return(sort_array[mid_array-1]+sort_array[mid_array])/2
            }
            else{
                return(sort_array[mid_array])
            }
        }
        findMode() {
            
            let object = {}
          
            for (let i = 0; i < this.array.length; i++) {
              if (object[this.array[i]]) {
                
                object[this.array[i]] += 1
              } else {
                
                object[this.array[i]] = 1
              }
            }
          
            
            let biggestValue = -1
            let biggestValuesKey = -1
          
            
            Object.keys(object).forEach(key => {
              let value = object[key]
              if (value > biggestValue) {
                biggestValue = value
                biggestValuesKey = key
              }
            })
          
            return biggestValuesKey
          
          }
        calculateRange(){
            return (Math.max(...this.array)-Math.min(...this.array))
        }
        calculateVariance(){
            const sumSquareDifference = this.array.reduce((acc,value)=>acc + Math.pow(value-this.calculateMean(),2),0)

            return sumSquareDifference/this.array.length
        }
        calculateStdDev(){
          return Math.sqrt(this.calculateVariance())
        }
        calculateMeanAbsDev(){
          const sumAbsoluteDifferences = this.array.reduce((acc, value) => acc + Math.abs(value - this.calculateMean()), 0)

          return sumAbsoluteDifferences/this.array.length

        }
        calculateQuartileDev(){
          const sort_array = this.array.sort()
          const N = sort_array.length

           const Q1Index = Math.floor(0.25*(N+1))
          const Q1 = sort_array[Q1Index-1]+(sort_array[Q1Index]-sort_array[Q1Index-1])*0.25

          const Q3Index = Math.floor(0.75*(N+1))
          const Q3 = sort_array[Q3Index-1]+(sort_array[Q3Index]-sort_array[Q3Index-1])*0.75

          return (Q3-Q1)/2
        }
    } 

//compute the mean
const theMean =new DescStat([1,2,3,4,5])
let mean = theMean.calculateMean()
console.log(`the mean of the array is ${mean}`)

// compute the median
const theMedian =new DescStat([1,2,3,4,5])
let median = theMean.calculateMedian()
console.log(`the median of the array is ${median}`)

//compute the mode
const theMode = new DescStat([1,1,2,3,4,5])
let mode =theMode.findMode()
console.log(`the mode of the array is ${mode}`)

//compute the Range
const theRange = new DescStat([1,2,3,4,5])
let range = theRange.calculateRange()
console.log(`the range of the array is ${range}`)

//compute the variance
const theVariance = new DescStat([1,2,3,4,5])
let variance = theVariance.calculateVariance()
console.log(`the Variance of the array is ${variance}`)

//compute standard deviation
const theStandardDeviation = new DescStat([1,2,3,4,5])
let standardDeviation = theStandardDeviation.calculateStdDev()
console.log(`the Standard Deviation of the array is ${standardDeviation}`)

//compute the mean deviation
const theMeanDeviation = new DescStat([1,2,3,4,5])
let meanDeviation = theMeanDeviation.calculateMeanAbsDev()
console.log(`the Mean Deviation of the array is ${meanDeviation}`) 

//compute the quartile deviation
const theQuartileDeviation = new DescStat([1,2,3,4,5])
let QuartileDeviation = theQuartileDeviation.calculateQuartileDev()
console.log(`the Quartile Deviation of the  array is ${QuartileDeviation}`)

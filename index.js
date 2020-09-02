const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
let batteries = () => {
    let totalBatteries = batteryBatches.reduce((total, element) =>{
        return total + element
    })
    return totalBatteries
} 

let totalBatteries = batteries()
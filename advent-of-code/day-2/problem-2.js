let data = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const reports = data.trim().split('\n')
let increasing = true
let decreasing = true
let sum = 0
let valid = false

function checkValid(levels){
  let increasing = true
  let decreasing = true

  for(let j = 0;j < levels.length;j++){
    if(Number.isFinite(levels[j + 1])){
      diff = levels[j + 1] - levels[j]
      
      if(diff === 0 || diff > 3 || diff < -3){
        return false
      }

      if(diff > 0)
        decreasing = false
      if(diff < 0)
        increasing = false
      if(!increasing && !decreasing){
        return false
      }
    }
  }
  return true
}

for(let i = 0;i < reports.length;i++){
  let levels = reports[i].trim().split(' ').map(Number)
  valid = checkValid(levels)
  console.log(valid)
  if(valid === true){
    sum += 1
  }
}

console.log(sum)

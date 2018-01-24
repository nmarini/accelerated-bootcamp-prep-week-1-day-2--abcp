function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array 
  // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function accessElementInArray(array, index) {
console.log(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array

}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop(element)
return array
}

function removeElementFromEndOfArray(array) {
  array.slice(array.legnth-1)

}

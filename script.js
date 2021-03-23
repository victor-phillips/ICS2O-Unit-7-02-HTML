// setip default values
let uval = 0
// event listener
document.getElementById('button').addEventListener('click', func1)
//detector
function func1 () {
  uval = document.getElementById('input').value
  uval = parseInt(uval)
  if (uval > -1) {
    document.getElementById('text').innerHTML = 'positive'
  } else {
    document.getElementById('text').innerHTML = 'negative'
  }
}

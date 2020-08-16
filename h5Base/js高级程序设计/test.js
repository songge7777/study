let text = "mom and dad and bady"
var p = /mom( and dad (and bady)?)?/gi
var p1 = /nd/gi
var ma1 = p1.exec(text)
console.log(ma1)
var ma = p1.exec(text)
console.log(ma)
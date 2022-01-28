let cNum = 0 
let cFar = 0
let cFar1 = 0
let cFar2 = 0
let cFar3 = 0
let cFar4 = 0
let cFar5 = 0
let cFar6 = 0
let cFar7 = 0
let cFar8 = 0
let cFar9 = 0
let cFar10 = 0
let cFar11 = 0
let cFar12 = 0
let cFar13 = 0
let cFar14 = 0
let cFar15 = 0
let cFar16 = 0
let cFar17 = 0
let cFar18 = 0
let cFar19 = 0
let cOnce = 0
let cLvl = 1000
let cScore = 0
let cLines = 0
let cWh
let cMax = 1
let cMax2 = 4
let cTimer = 1
let cSel = new Array(cMax)
let cSel2 = new Array(cMax)
let cSel3 = new Array(cMax)
let cBlocNum = 0
let cBlock = 'assets/BB.png'
let cBleft = 200
let cBtop = 100
let cTS = 1
let cCT = true
let cCHK = false
let cOr = 0
let cNum5 = 0
let cGame = 0
let cTest2 = 0
let cNor = 0
let cHLeft = false
let cHRight = false
let cHTop = false
let cHBot = false
let cBloc2 = '1'
let cBloc = '2'
let cProper = false
let cNum1 = cNum - 3
let cNum2 = cNum - 2
let cNum3 = cNum - 1
let cNum4 = cNum - 0 
let cSel01 = document.getElementById('cNBB' + cNum1)
let cSel02 = document.getElementById('cNBB' + cNum2)
let cSel03 = document.getElementById('cNBB' + cNum3)
let cSel04 = document.getElementById('cNBB' + cNum4)
const cObj2 = []
let cMor = 0
const cBody = document.getElementById('body')

document.addEventListener('keypress', cKey1)

    function cKey1() {
cNum1 = cNum - 3
cNum2 = cNum - 2
cNum3 = cNum - 1
cNum4 = cNum - 0 
cSel01 = document.getElementById('cNBB' + cNum1)
cSel02 = document.getElementById('cNBB' + cNum2)
cSel03 = document.getElementById('cNBB' + cNum3)
cSel04 = document.getElementById('cNBB' + cNum4)
const cSel0 = [cSel01, cSel02, cSel03, cSel04] 
let cKey = event.key
if (cOr == 0) {
cOr = 1
}
cSel0.forEach(cBound)
cObj2.forEach(cHitBlock)
let cWall = parseInt(document.getElementById('Wall').style.top)
let cWall2 = parseInt(document.getElementById('Wall2').style.left) + 25
let cWall3 = parseInt(document.getElementById('Wall3').style.left)
cCanTurn()
   if (cKey == 'd')  {
           cSel01.style.left =  parseInt(cSel01.style.left) + 25 
	   cSel02.style.left =  parseInt(cSel02.style.left) + 25 
	   cSel03.style.left =  parseInt(cSel03.style.left) + 25 
	   cSel04.style.left =  parseInt(cSel04.style.left) + 25 
}
      if (cKey == 'a') {
          cSel01.style.left =  parseInt(cSel01.style.left) - 25 
	  cSel02.style.left =  parseInt(cSel02.style.left) - 25 
	  cSel03.style.left =  parseInt(cSel03.style.left) - 25 
	  cSel04.style.left =  parseInt(cSel04.style.left) - 25 
   }
         if (cKey == 'w') {
if (cCT == true) {
cTS = cTS + 1
cTurn()
}   
}
if (cTS >= 4){
cTS = cTS - 4
}

           if (cKey == 's') {
           cScore = cScore + 1
                      cSel01.style.top =  parseInt(cSel01.style.top) + 25 
          cSel02.style.top =  parseInt(cSel02.style.top) + 25 
          cSel03.style.top =  parseInt(cSel03.style.top) + 25 
          cSel04.style.top =  parseInt(cSel04.style.top) + 25 
          	document.getElementById('cDiv01').innerHTML = 'Score: ' + cScore
}
 }

    function cHitBlock(cObj) {
let cKey = event.key
	const cSel0 = [cSel01, cSel02, cSel03, cSel04]
        let cLeft = parseInt(cSel0[0].style.left)
        let cRight = cLeft + 25
        let cTop = parseInt(cSel0[0].style.top)
        let cBot = cTop + 25
	let cLeft1 = parseInt(cSel0[1].style.left)
        let cRight1 = cLeft1 + 25
        let cTop1 = parseInt(cSel0[1].style.top)
        let cBot1 = cTop1 + 25
        let cLeft2 = parseInt(cSel0[2].style.left)
        let cRight2 = cLeft2 + 25
        let cTop2 = parseInt(cSel0[2].style.top)
        let cBot2 = cTop2 + 25
        let cLeft3 = parseInt(cSel0[3].style.left)
        let cRight3 = cLeft3 + 25
        let cTop3 = parseInt(cSel0[3].style.top)
        let cBot3 = cTop3 + 25
        let bLeft = parseInt(cObj.style.left)
        let bRight = bLeft + 25
        let bTop = parseInt(cObj.style.top)
        let bBot = bTop + 25
if (cObj == cSel0[0] || cObj == cSel0[1] || cObj == cSel0[2] || cObj == cSel0[3]) {
cProper = false
} else {
cProper = true
}
if (cBot == bTop && cRight - 25 >= bLeft && cLeft + 25 <= bRight && cKey == 's' && cProper == true|| cBot1 == bTop && cRight1 - 25 >= bLeft && cLeft1 + 25 <= bRight && cKey == 's' && cProper == true|| cBot2 == bTop && cRight2 - 25 >= bLeft && cLeft2 + 25 <= bRight && cKey == 's' && cProper == true|| cBot3 == bTop && cRight3 - 25 >= bLeft && cLeft3 + 25 <= bRight && cKey == 's' && cProper == true) {
          cSel01.style.top =  parseInt(cSel01.style.top) - 25 
          cSel02.style.top =  parseInt(cSel02.style.top) - 25 
          cSel03.style.top =  parseInt(cSel03.style.top) - 25 
          cSel04.style.top =  parseInt(cSel04.style.top) - 25
          cCHK = true
          cGameLog()
}
if (cTop == bBot && cLeft + 25 <= bRight && cRight - 25 >= bLeft && cKey == "w" && cProper == true|| cTop1 == bBot && cLeft1 + 25 <= bRight && cRight1 - 25 >= bLeft && cKey == "w" && cProper == true|| cTop2 == bBot && cLeft2 + 25 <= bRight && cRight2 - 25 >= bLeft && cKey == "w" && cProper == true|| cTop3 == bBot && cLeft3 + 25 <= bRight && cRight3 - 25 >= bLeft && cKey == "w" && cProper == true) {
          cSel01.style.top =  parseInt(cSel01.style.top) + 25 
          cSel02.style.top =  parseInt(cSel02.style.top) + 25 
          cSel03.style.top =  parseInt(cSel03.style.top) + 25 
          cSel04.style.top =  parseInt(cSel04.style.top) + 25
}
if (cRight == bLeft && cBot - 25 >= bTop && cTop + 25 <= bBot && cKey == 'd' && cProper == true||cRight1 == bLeft && cBot1 - 25 >= bTop && cTop1 + 25 <= bBot && cKey == 'd' && cProper == true||cRight2 == bLeft && cBot2 - 25 >= bTop && cTop2 + 25 <= bBot && cKey == 'd' && cProper == true||cRight3 == bLeft && cBot3 - 25 >= bTop && cTop3 + 25 <= bBot && cKey == 'd' && cProper == true) {
          cSel01.style.left =  parseInt(cSel01.style.left) - 25 
          cSel02.style.left =  parseInt(cSel02.style.left) - 25 
          cSel03.style.left =  parseInt(cSel03.style.left) - 25 
          cSel04.style.left =  parseInt(cSel04.style.left) - 25 
}
if (cLeft == bRight && cBot - 25 >= bTop && cTop + 25 <= bBot && cKey == 'a' && cProper == true||cLeft1 == bRight && cBot1 - 25 >= bTop && cTop1 + 25 <= bBot && cKey == 'a' && cProper == true||cLeft2 == bRight && cBot2 - 25 >= bTop && cTop2 + 25 <= bBot && cKey == 'a' && cProper == true||cLeft3 == bRight && cBot3 - 25 >= bTop && cTop3 + 25 <= bBot && cKey == 'a' && cProper == true) {
          cSel01.style.left =  parseInt(cSel01.style.left) + 25 
          cSel02.style.left =  parseInt(cSel02.style.left) + 25 
          cSel03.style.left =  parseInt(cSel03.style.left) + 25 
          cSel04.style.left =  parseInt(cSel04.style.left) + 25 
}
    }
function cBound(cTst) {
const cSel0 = [cSel01, cSel02, cSel03, cSel04]   
let cKey = event.key
if (parseInt(cTst.style.left) - 25 <= 150 && cKey == 'a') {
          cSel0[0].style.left =  parseInt(cSel0[0].style.left) + 25 
          cSel0[1].style.left =  parseInt(cSel0[1].style.left) + 25 
          cSel0[2].style.left =  parseInt(cSel0[2].style.left) + 25 
          cSel0[3].style.left =  parseInt(cSel0[3].style.left) + 25

} 
if (parseInt(cTst.style.left) + 25 >= 425 && cKey == 'd') {
          cSel0[0].style.left =  parseInt(cSel0[0].style.left) - 25 
          cSel0[1].style.left =  parseInt(cSel0[1].style.left) - 25 
          cSel0[2].style.left =  parseInt(cSel0[2].style.left) - 25 
          cSel0[3].style.left =  parseInt(cSel0[3].style.left) - 25 
} 
if (parseInt(cTst.style.top) + 25 == 700 && cKey == 's') {
          cSel0[0].style.top =  parseInt(cSel0[0].style.top) - 25 
          cSel0[1].style.top =  parseInt(cSel0[1].style.top) - 25 
          cSel0[2].style.top =  parseInt(cSel0[2].style.top) - 25 
          cSel0[3].style.top =  parseInt(cSel0[3].style.top) - 25 
	cCHK = true
	cGameLog()
}
}
function cGameLog(cObj){
setTimeout(function () {
if(cCHK == true) {
cCHK = false
cObj2.forEach(cGameLog2)
cImgI()
cNum1 = cNum - 3
cNum2 = cNum - 2
cNum3 = cNum - 1
cNum4 = cNum - 0 
cSel01 = document.getElementById('cNBB' + cNum1)
cSel02 = document.getElementById('cNBB' + cNum2)
cSel03 = document.getElementById('cNBB' + cNum3)
cSel04 = document.getElementById('cNBB' + cNum4)
if (cFar19 <= 9) {
cFar19 = 0
}
if (cFar19 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar19 = 0
}
if (cFar18 <= 9) {
cFar18 = 0
}
if (cFar18 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar18 = 0
}
if (cFar17 <= 9) {
cFar17 = 0
}
if (cFar17 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar17 = 0
}
if (cFar16 <= 9) {
cFar16 = 0
}
if (cFar16 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar16 = 0
}
if (cFar15 <= 9) {
cFar15 = 0
}
if (cFar15 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar15 = 0
}
if (cFar14 <= 9) {
cFar14 = 0
}
if (cFar14 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar14 = 0
}
if (cFar13 <= 9) {
cFar13 = 0
}
if (cFar13 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar13 = 0
}
if (cFar12 <= 9) {
cFar12 = 0
}
if (cFar12 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar12 = 0
}
if (cFar11 <= 9) {
cFar11 = 0
}
if (cFar11 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar11 = 0
}
if (cFar10 <= 9) {
cFar10 = 0
}
if (cFar10 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar10 = 0
}
if (cFar9 <= 9) {
cFar9 = 0
}
if (cFar9 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar9 = 0
}
if (cFar8 <= 9) {
cFar8 = 0
}
if (cFar8 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar8 = 0
}
if (cFar7 <= 9) {
cFar7 = 0
}
if (cFar7 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar7 = 0
}
if (cFar6 <= 9) {
cFar6 = 0
}
if (cFar6 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar6 = 0
}
if (cFar5 <= 9) {
cFar5 = 0
}
if (cFar5 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar5 = 0
}
if (cFar4 <= 9) {
cFar4 = 0
}
if (cFar4 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar4 = 0
}
if (cFar3 <= 9) {
cFar3 = 0
}
if (cFar3 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar3 = 0
}
if (cFar2 <= 9) {
cFar2 = 0
}
if (cFar2 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar2 = 0
}
if (cFar1 <= 9) {
cFar1 = 0
}
if (cFar1 >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cLines = cLines + 1
document.getElementById('cDiv03').innerHTML = 'Lines: ' + cLines
cFar1 = 0
}
if (cFar <= 9) {
cFar = 0
}
if (cFar >=10) {
cObj2.forEach(cDelet)
cObj2.forEach(cMove)
cFar = 0
}
}
}, 750)
}
function cGameLog2(cObj) {
const cSel0 = [cSel01, cSel02, cSel03, cSel04]
if (cObj == cSel0[0] || cObj == cSel0[1] || cObj == cSel0[2] || cObj == cSel0[3]) {
cProper = false
} else {
cProper = true
}
if (parseInt(cObj.style.top) == 675) {
cFar19 = cFar19 + 1
}
if (parseInt(cObj.style.top) == 650) {
cFar18 = cFar18 + 1
}
if (parseInt(cObj.style.top) == 625) {
cFar17 = cFar17 + 1
}
if (parseInt(cObj.style.top) == 600) {
cFar16 = cFar16 + 1
}
if (parseInt(cObj.style.top) == 575) {
cFar15 = cFar15 + 1
}
if (parseInt(cObj.style.top) == 550) {
cFar14 = cFar14 + 1
}
if (parseInt(cObj.style.top) == 525) {
cFar13 = cFar13 + 1
}
if (parseInt(cObj.style.top) == 500) {
cFar12 = cFar12 + 1
}
if (parseInt(cObj.style.top) == 475) {
cFar11 = cFar11 + 1
}
if (parseInt(cObj.style.top) == 450) {
cFar10 = cFar10 + 1
}
if (parseInt(cObj.style.top) == 425) {
cFar9 = cFar9 + 1
}
if (parseInt(cObj.style.top) == 400) {
cFar8 = cFar8 + 1
}
if (parseInt(cObj.style.top) == 375) {
cFar7 = cFar7 + 1
}
if (parseInt(cObj.style.top) == 350) {
cFar6 = cFar6 + 1
}
if (parseInt(cObj.style.top) == 325) {
cFar5 = cFar5 + 1
}
if (parseInt(cObj.style.top) == 300) {
cFar4 = cFar4 + 1
}
if (parseInt(cObj.style.top) == 275) {
cFar3 = cFar3 + 1
}
if (parseInt(cObj.style.top) == 250) {
cFar2 = cFar2 + 1
}
if (parseInt(cObj.style.top) == 225) {
cFar1 = cFar1 + 1
}
if (parseInt(cObj.style.top) == 200 && cProper == true) {
cEnd()
}
}
function cDelet (cObj) {
if (cFar19 >= 10 && parseInt(cObj.style.top) == 675) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar18 >= 10 && parseInt(cObj.style.top) == 650) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar17 >= 10 && parseInt(cObj.style.top) == 625) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar16 >= 10 && parseInt(cObj.style.top) == 600) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar15 >= 10 && parseInt(cObj.style.top) == 575) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar14 >= 10 && parseInt(cObj.style.top) == 550) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar13 >= 10 && parseInt(cObj.style.top) == 525) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar12 >= 10 && parseInt(cObj.style.top) == 500) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar11 >= 10 && parseInt(cObj.style.top) == 475) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar10 >= 10 && parseInt(cObj.style.top) == 450) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar9 >= 10 && parseInt(cObj.style.top) == 425) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar8 >= 10 && parseInt(cObj.style.top) == 400) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar7 >= 10 && parseInt(cObj.style.top) == 375) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar6 >= 10 && parseInt(cObj.style.top) == 350) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar5 >= 10 && parseInt(cObj.style.top) == 325) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar4 >= 10 && parseInt(cObj.style.top) == 300) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar3 >= 10 && parseInt(cObj.style.top) == 275) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar2 >= 10 && parseInt(cObj.style.top) == 250) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
if (cFar1 >= 10 && parseInt(cObj.style.top) == 225) {
cObj.style.top = parseInt(cObj.style.top) + 500
cObj.remove()
}
}
function cMove(cObj) {
if (cFar19 == 10 && parseInt(cObj.style.top) <= 675) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar18 == 10 && parseInt(cObj.style.top) <= 650) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar17 == 10 && parseInt(cObj.style.top) <= 625) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar16 == 10 && parseInt(cObj.style.top) <= 600) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar15 == 10 && parseInt(cObj.style.top) <= 575) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar14 == 10 && parseInt(cObj.style.top) <= 550) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar13 == 10 && parseInt(cObj.style.top) <= 525) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar12 == 10 && parseInt(cObj.style.top) <= 500) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar11 == 10 && parseInt(cObj.style.top) <= 475) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar10 == 10 && parseInt(cObj.style.top) <= 450) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar9 == 10 && parseInt(cObj.style.top) <= 425) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar8 == 10 && parseInt(cObj.style.top) <= 400) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar7 == 10 && parseInt(cObj.style.top) <= 375) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar6 == 10 && parseInt(cObj.style.top) <= 350) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar5 == 10 && parseInt(cObj.style.top) <= 325) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar4 == 10 && parseInt(cObj.style.top) <= 300) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar3 == 10 && parseInt(cObj.style.top) <= 275) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar2 == 10 && parseInt(cObj.style.top) <= 250) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
if (cFar1 == 10 && parseInt(cObj.style.top) <= 225) {  
cObj.style.top = parseInt(cObj.style.top) + 25
}
}
function cEnd() {
document.getElementById('cDiv02').innerHTML = 'GAME OVER'
document.getElementById('cDiv02').style.visibility = "visible"
}
function cCanTurn() {
const cSel0 = [cSel01, cSel02, cSel03, cSel04] 
if (parseInt(cSel0[0].style.left) + 25 == 425 || parseInt(cSel0[1].style.left) + 25 == 425 || parseInt(cSel0[2].style.left) + 25 == 425 || parseInt(cSel0[3].style.left) + 25 == 425) {
cCT = true
} else {
cCT = true
}
if (parseInt(cSel0[0].style.left) == 175 || parseInt(cSel0[1].style.left) == 175 || parseInt(cSel0[2].style.left) == 175 || parseInt(cSel0[3].style.left) == 175) {
cCT = true
} else {
cCT = true
}
}
function cFinalGameRunner() {
          cSel01.style.top =  parseInt(cSel01.style.top) + 25 
          cSel02.style.top =  parseInt(cSel02.style.top) + 25 
          cSel03.style.top =  parseInt(cSel03.style.top) + 25 
          cSel04.style.top =  parseInt(cSel04.style.top) + 25
cObj2.forEach(cFinalGameLog)
}
function cFinalGameLog (cObj) {
          	const cSel0 = [cSel01, cSel02, cSel03, cSel04]
        let cLeft = parseInt(cSel0[0].style.left)
        let cRight = cLeft + 25
        let cTop = parseInt(cSel0[0].style.top)
        let cBot = cTop
	let cLeft1 = parseInt(cSel0[1].style.left)
        let cRight1 = cLeft1 + 25
        let cTop1 = parseInt(cSel0[1].style.top)
        let cBot1 = cTop1
        let cLeft2 = parseInt(cSel0[2].style.left)
        let cRight2 = cLeft2 + 25
        let cTop2 = parseInt(cSel0[2].style.top)
        let cBot2 = cTop2
        let cLeft3 = parseInt(cSel0[3].style.left)
        let cRight3 = cLeft3 + 25
        let cTop3 = parseInt(cSel0[3].style.top)
        let cBot3 = cTop3
        let bLeft = parseInt(cObj.style.left)
        let bRight = bLeft + 25
        let bTop = parseInt(cObj.style.top)
        let bBot = bTop + 25
if (cObj == cSel0[0] || cObj == cSel0[1] || cObj == cSel0[2] || cObj == cSel0[3]) {
cProper = false
} else {
cProper = true
}
if (cBot == bTop && cRight - 25 >= bLeft && cLeft + 25 <= bRight && cProper == true|| cBot1 == bTop && cRight1 - 25 >= bLeft && cLeft1 + 25 <= bRight && cProper == true|| cBot2 == bTop && cRight2 - 25 >= bLeft && cLeft2 + 25 <= bRight && cProper == true|| cBot3 == bTop && cRight3 - 25 >= bLeft && cLeft3 + 25 <= bRight && cProper == true) {
          cSel01.style.top =  parseInt(cSel01.style.top) - 25 
          cSel02.style.top =  parseInt(cSel02.style.top) - 25 
          cSel03.style.top =  parseInt(cSel03.style.top) - 25 
          cSel04.style.top =  parseInt(cSel04.style.top) - 25
          cCHK = true
          cGameLog()
}
if (parseInt(cSel01.style.top) == 700 ||parseInt(cSel02.style.top) == 700 || parseInt(cSel03.style.top) == 700 || parseInt(cSel04.style.top) == 700) {
          cSel01.style.top =  parseInt(cSel01.style.top) - 25 
          cSel02.style.top =  parseInt(cSel02.style.top) - 25 
          cSel03.style.top =  parseInt(cSel03.style.top) - 25 
          cSel04.style.top =  parseInt(cSel04.style.top) - 25 
	cCHK = true
	cGameLog()
}
}
function cBlox () {
if (cBlocNum == 1) {
cMor = 25
cNor = 0
cBlock = 'assets/LLBB.png'
if (cNum == cNum5 - 3) {
cBtop = '75px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '100px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 4) {
cBtop = '150px'
cBleft = '300px'
}
}

if (cBlocNum == 2) {
cNor = -25
cMor = 50
cBlock = 'assets/YB.png'
if (cNum == cNum5 - 3) {
cBtop = '150px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '150px'
cBleft = '275px'
}
if (cNum == cNum5 - 4) {
cBtop = '125px'
cBleft = '275px'
}
}

if (cBlocNum == 3) {
cNor = -25
cMor = 50
cBlock = 'assets/PB.png'
if (cNum == cNum5 - 3) {
cBtop = '75px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '100px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '100px'
cBleft = '325px'
}
if (cNum == cNum5 - 4) {
cBtop = '100px'
cBleft = '275px'
}
}

if (cBlocNum == 4) {
cNor = -25
cMor = 50
cBlock = 'assets/RB.png'
if (cNum == cNum5 - 3) {
cBtop = '150px'
cBleft = '275px'
}
if (cNum == cNum5 - 2) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '125px'
cBleft = '275px'
}
if (cNum == cNum5 - 4) {
cBtop = '100px'
cBleft = '300px'
}
}

if (cBlocNum == 5) {
cNor = -25
cMor = 50
cBlock = 'assets/BB.png'
if (cNum == cNum5 - 3) {
cBtop = '150px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '100px'
cBleft = '300px'
}
if (cNum == cNum5 - 4) {
cBtop = '150px'
cBleft = '275px'
}
}

if (cBlocNum == 6) {
cNor = -25
cMor = 50
cBlock = 'assets/OB.png'
if (cNum == cNum5 - 3) {
cBtop = '150px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '100px'
cBleft = '300px'
}
if (cNum == cNum5 - 4) {
cBtop = '150px'
cBleft = '325px'
}
}

if (cBlocNum == 7) {
cNor = -25
cMor = 50
cBlock = 'assets/GB.png'
if (cNum == cNum5 - 3) {
cBtop = '150px'
cBleft = '300px'
}
if (cNum == cNum5 - 2) {
cBtop = '125px'
cBleft = '300px'
}
if (cNum == cNum5 - 1) {
cBtop = '125px'
cBleft = '275px'
}
if (cNum == cNum5 - 4) {
cBtop = '100px'
cBleft = '275px'
}
}
}
function cTurn(){
if (cTS == 0) {
cTS = cTS + 1
}
if (cBlocNum == 1) {
if (cTS == 1){
cSel02.style.top = parseInt(cSel02.style.top) - 75
cSel03.style.top = parseInt(cSel03.style.top) - 50
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel02.style.left = parseInt(cSel02.style.left) - 25
cSel03.style.left = parseInt(cSel03.style.left) - 50
cSel04.style.left = parseInt(cSel04.style.left) - 75
}
if (cTS == 2){
cSel02.style.top = parseInt(cSel02.style.top) + 75
cSel03.style.top = parseInt(cSel03.style.top) + 50
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel03.style.left = parseInt(cSel03.style.left) + 50
cSel04.style.left = parseInt(cSel04.style.left) + 75
}
if (cTS == 3){
cSel02.style.top = parseInt(cSel02.style.top) - 75
cSel03.style.top = parseInt(cSel03.style.top) - 50
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel02.style.left = parseInt(cSel02.style.left) - 25
cSel03.style.left = parseInt(cSel03.style.left) - 50
cSel04.style.left = parseInt(cSel04.style.left) - 75
}
if (cTS == 4){
cSel02.style.top = parseInt(cSel02.style.top) + 75
cSel03.style.top = parseInt(cSel03.style.top) + 50
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel03.style.left = parseInt(cSel03.style.left) + 50
cSel04.style.left = parseInt(cSel04.style.left) + 75
}
}
if (cBlocNum == 2) {
if (cTS == 1){
}
if (cTS == 2){
}
if (cTS == 3){
}
if (cTS == 4){
}
}
if (cBlocNum == 3) {
if (cTS == 1){
cSel01.style.left = parseInt(cSel01.style.left) - 25
cSel01.style.top = parseInt(cSel01.style.top) - 25
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel02.style.top = parseInt(cSel02.style.top) - 25
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
}
if (cTS == 2){
cSel01.style.left = parseInt(cSel01.style.left) + 25
cSel01.style.top = parseInt(cSel01.style.top) + 25
}
if (cTS == 3){
cSel02.style.left = parseInt(cSel02.style.left) - 25
cSel02.style.top = parseInt(cSel02.style.top) + 25
}
if (cTS == 4){
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) - 25
}
}
if (cBlocNum == 4) {
if (cTS == 1){
cSel02.style.left = parseInt(cSel02.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel01.style.left = parseInt(cSel01.style.left) + 50
cSel01.style.top = parseInt(cSel01.style.top) - 25
}
if (cTS == 2){
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel01.style.left = parseInt(cSel01.style.left) - 50
cSel01.style.top = parseInt(cSel01.style.top) + 25
}
if (cTS == 3){
cSel02.style.left = parseInt(cSel02.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel01.style.left = parseInt(cSel01.style.left) + 50
cSel01.style.top = parseInt(cSel01.style.top) - 25
}
if (cTS == 4){
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel01.style.left = parseInt(cSel01.style.left) - 50
cSel01.style.top = parseInt(cSel01.style.top) + 25
}
}
if (cBlocNum == 5) {
if (cTS == 1){
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel03.style.top = parseInt(cSel03.style.top) - 25
cSel04.style.left = parseInt(cSel04.style.left) - 50
cSel02.style.left = parseInt(cSel02.style.left) - 75
cSel02.style.top = parseInt(cSel02.style.top) + 25
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) - 50
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel03.style.top = parseInt(cSel03.style.top) - 25
cSel02.style.top = parseInt(cSel02.style.top) - 75
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel02.style.top = parseInt(cSel02.style.top) + 25
cSel02.style.left = parseInt(cSel02.style.left) + 50
cSel04.style.left = parseInt(cSel04.style.left) + 75
cSel04.style.top = parseInt(cSel04.style.top) - 25
}
if (cTS == 2){
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel02.style.top = parseInt(cSel02.style.top) - 25
cSel02.style.left = parseInt(cSel02.style.left) - 50
cSel04.style.left = parseInt(cSel04.style.left) - 75
cSel04.style.top = parseInt(cSel04.style.top) + 25
}
if (cTS == 3){
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 50
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel03.style.top = parseInt(cSel03.style.top) + 25
cSel02.style.top = parseInt(cSel02.style.top) + 75
}
if (cTS == 4){
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel03.style.top = parseInt(cSel03.style.top) + 25
cSel04.style.left = parseInt(cSel04.style.left) + 50
cSel02.style.left = parseInt(cSel02.style.left) + 75
cSel02.style.top = parseInt(cSel02.style.top) - 25
}
}
if (cBlocNum == 6) {
if (cTS == 1){
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel03.style.top = parseInt(cSel03.style.top) - 25
cSel01.style.left = parseInt(cSel01.style.left) - 25
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) - 50
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel02.style.left = parseInt(cSel02.style.left) - 50
cSel04.style.left = parseInt(cSel04.style.left) - 75
cSel02.style.top = parseInt(cSel02.style.top) + 25
cSel04.style.top = parseInt(cSel04.style.top) - 25
}
if (cTS == 2){
cSel03.style.left = parseInt(cSel03.style.left) + 25
cSel02.style.left = parseInt(cSel02.style.left) + 50
cSel04.style.left = parseInt(cSel04.style.left) + 75
cSel02.style.top = parseInt(cSel02.style.top) - 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
}
if (cTS == 3){
cSel01.style.left = parseInt(cSel01.style.left) + 25
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) + 50
}
if (cTS == 4){
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel03.style.left = parseInt(cSel03.style.left) - 25
cSel03.style.top = parseInt(cSel03.style.top) + 25
}
}
if (cBlocNum == 7) {
if (cTS == 1){
cSel02.style.left = parseInt(cSel02.style.left) - 25 
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel03.style.left = parseInt(cSel03.style.left) - 50
cSel01.style.left = parseInt(cSel01.style.left) - 50
cSel01.style.top = parseInt(cSel01.style.top) - 25
}
if (cTS == 2){
cSel02.style.left = parseInt(cSel02.style.left) + 25
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel03.style.left = parseInt(cSel03.style.left) + 50
cSel01.style.left = parseInt(cSel01.style.left) + 50
cSel01.style.top = parseInt(cSel01.style.top) + 25
}
if (cTS == 3){
cSel02.style.left = parseInt(cSel02.style.left) - 25 
cSel04.style.top = parseInt(cSel04.style.top) - 25
cSel04.style.left = parseInt(cSel04.style.left) - 25
cSel03.style.left = parseInt(cSel03.style.left) - 50
cSel01.style.left = parseInt(cSel01.style.left) - 50
cSel01.style.top = parseInt(cSel01.style.top) - 25
}
if (cTS == 4){
cSel02.style.left = parseInt(cSel02.style.left) +25
cSel04.style.top = parseInt(cSel04.style.top) + 25
cSel04.style.left = parseInt(cSel04.style.left) + 25
cSel03.style.left = parseInt(cSel03.style.left) + 50
cSel01.style.left = parseInt(cSel01.style.left) + 50
cSel01.style.top = parseInt(cSel01.style.top) + 25
}
}
}
function cPush() {
let cNum5 = cNum - 3
let cNum6 = cNum - 2
let cNum7 = cNum - 1
let cNum8 = cNum - 0
cObj2.push( 
document.getElementById('cNBB' + cNum5),
document.getElementById('cNBB' + cNum6),
document.getElementById('cNBB' + cNum7),
document.getElementById('cNBB' + cNum8),
)
}

function cImgI () {
cTS = 1
cNum5 = cNum5 + 4
cBlocNum = Math.floor(Math.random() * 7) + 1;
 for (let cLoop = 0; cLoop < cMax2; cLoop++) {
 	    cBlox()
            cNum = cNum + 1
            let img = document.createElement('img');
            img.src = cBlock;
            img.style = 'position:absolute; left:' + cBleft +'; top:' + cBtop + '; width:25; height:25;'
	    img.id = 'cNBB' + cNum
            document.getElementById('body').appendChild(img);
 }
cPush()
 }
function cFarp () {
//this function serves no purpose except it has a funny name
}
function cStart() {
cImgI()
cKey1()
setInterval(cFinalGameRunner, cLvl)
}

let homescore = document.getElementById('home-score')
let guestscore = document.getElementById('guest-score')

let count=0
let count1=0

let incr1El = document.getElementById('but-1')
  function incr1(){
    count+=1
    homescore.textContent=count
}



let incr2El = document.getElementById('but-2')
   function incr2(){
    count+=2
    homescore.textContent=count
}



let incr3El = document.getElementById('but-3')
   function incr3(){
    count+=3
    homescore.textContent=count
}



let incr4El = document.getElementById('but-4')
   function incr4(){
    count1+=1
    guestscore.textContent=count1
}



let incr5El = document.getElementById('but-5')
   function incr5(){
    count1+=2
    guestscore.textContent=count1
}




let incr6El = document.getElementById('but-6')
   function incr6(){
    count1+=3
    guestscore.textContent=count1
}



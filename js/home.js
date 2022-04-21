function heightToTop(ele){
  let bridge = ele;
  let root = document.body;
  let height = 0;
  do{
      height += bridge.offsetTop;
      bridge = bridge.offsetParent;
  }while(bridge !== root)

  return height;
}

let worksBn=document.getElementById('worksBn')
let works=document.getElementById('works')
let pfbtn=document.getElementById('pfbtn')
let pf=document.getElementById('profile')

worksBn.addEventListener('click',function(){
  window.scrollTo({
      top:heightToTop(works),
      behavior:'smooth'
  })
})

pfbtn.addEventListener('click',function(){
  window.scrollTo({
      top:heightToTop(pf),
      behavior:'smooth'
  })
})






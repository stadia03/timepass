
function gender(){
  const msg=document.getElementById("revel")

  // console.log("gaurabbb");
  msg.style.opacity="100";
  setTimeout(()=>{
    msg.style.opacity="0";
},10000);
}

function again(){

  const agg=document.getElementById("again")
  agg.style.opacity="100";
  setTimeout(()=>{ 
    agg.style.opacity="0";
  },10000);
  
  // agg.style.opacity="100";

}
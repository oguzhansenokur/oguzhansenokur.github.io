function onClick(value)
{
    const ids=[];
    ids.push('one','two','three','four','five')

    var element=document.getElementById(value.id)
    element.classList.remove('button')
    element.classList.add('button-active')

 ids.map(item=>{
    if(item!=value.id){
      var element=document.getElementById(item)
      element.classList.remove('button-active')
      element.classList.add('button')
 }})

}

function getValue()
{
    var element = document.getElementsByClassName('button-active');
    var rateElement=document.getElementById('rate');
    var ty_state=document.getElementById('ty-state');
    var ty_p=document.getElementById('ty-p');
    rateElement.style.display="none";
    ty_state.style.display="flex";
    ty_p.innerText='You selected  out'+ (element[0].id=='one' ? ' 1 ' : element[0].id=='two' ? ' 2 ' : element[0].id=='three' ? ' 3 ' : element[0].id=='four' ? ' 4 ' : element[0].id=='five' ? ' 5 ' : null )   +'of 5'

}
$.noConflict();
$(function() {
	
	
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img00");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	var mainImg = document.getElementById('myImg');
	var img1 = document.getElementById('img-1');
	img1.onclick = function(){
		mainImg.src = this.src;
	}
	var img2 = document.getElementById('img-2');
	img2.onclick = function(){
		mainImg.src = this.src;
	}
	var img3 = document.getElementById('img-3');
	img3.onclick = function(){
		mainImg.src = this.src;
	}
	var img4 = document.getElementById('img-4');
	img4.onclick = function(){
		mainImg.src = this.src;
	}


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		modal.style.display = "none";
	}

    $( "#dialog" ).dialog({
      autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
});

function Hello() {
	alert("Hello, World");
		
	$( "#dialog" ).dialog( "open" );
}

var srcList = ["img-1","img-2","img-3","img-4"]

function nextClicked(){
	var mainImg = document.getElementById('img00');
	var img = document.getElementById('img00');
	console.log(img)
	console.log(srcList[0])
	var ind=0;
	var i=0;
	console.log(i+" "+srcList.length)
	for(i=0;i<srcList.length;i++)
	{
		console.log(mainImg.src+" "+srcList[i]);
		var srcImg = document.getElementById(srcList[i]);
		var src = srcImg.src;
		if(mainImg.src === src){
			ind = i;
			break;
		}
		
	}
	if(ind==srcList.length-1)ind=0;
	else ind = ind+1;
	var refImg = document.getElementById(srcList[ind]);
	mainImg.src=refImg.src
	img.src=refImg.src
}

function preClicked(){
	var mainImg = document.getElementById('img00');
	var img = document.getElementById('img00');
	console.log(img)
	console.log(srcList[0])
	var ind=0;
	var i=0;
	console.log(i+" "+srcList.length)
	for(i=0;i<srcList.length;i++)
	{
		console.log(mainImg.src+" "+srcList[i]);
		var srcImg = document.getElementById(srcList[i]);
		var src = srcImg.src;
		if(mainImg.src === src){
			ind = i;
			break;
		}
		
	}
	if(ind==0)ind=srcList.length-1;
	else ind = ind-1;
	var refImg = document.getElementById(srcList[ind]);
	mainImg.src=refImg.src
	img.src=refImg.src
}

function changeMainImg(id){
	console.log(id)
	console.log(this);
	var srcImg = document.getElementById(id);
	var img = document.getElementById('img00');
	var mainImg = document.getElementById('myImg');
	mainImg.src = srcImg.src;
	img.src = srcImg.src;
}



const counter= document.querySelector('.counter')
const numCount= document.querySelector('.number')
const minus= document.querySelector('.reduce')
const addCart= document.querySelector('.add_to_cart')
const add= document.querySelector('.increase')
const cartInfo = document.querySelector('.cartinfo')
const price =document.querySelector('.amount')
const showCartModal =document.querySelector('.cart')


add.addEventListener('click', countUp)
minus.addEventListener('click', countDown)
addCart.addEventListener('click', addItems)
showCartModal.addEventListener('click', showUserCart)


function countUp(){
    numCount.textContent=parseInt(numCount.textContent)+1
}

function countDown(){
    
    if(numCount.textContent>0){
        numCount.textContent=numCount.textContent-1
    }
    else{
        numCount.textContent = 0
    }
}

function addItems(){
   
    counter.textContent=parseInt(counter.textContent)+parseInt(numCount.textContent)
    numCount.textContent===parseInt(numCount.textContent)
    price.textContent===parseInt(price.textContent)
    counter.textContent===parseInt(counter.textContent)
   
    let totalamount=parseInt(price.textContent) * parseInt(numCount.textContent)
    
    const div = document.createElement('div')
    div.className = 'cartdetails'
    div.innerHTML = `  <div class="thumbnail"></div>
    <div class="info">
        <p class="cart_card_p">Fall Limited Edition Sneakers</p>
        <p>$<span class="price">125</span> x <span class="itemsPicked">${numCount.textContent}</span> <span class="space">$<span class="totalprice">${totalamount}</span></span></p>
    </div>
    <div class="delete"><img src="./images/icon-delete.svg" alt=""></div>
    
</div>`
    cartInfo.append(div)
   
    
    if(counter.textContent){
        numCount.textContent=0
    }
    else{
        counter.textContent=parseInt(counter.textContent)+parseInt(numCount.textContent)
        
    }

    const removecartitem=div.querySelector('.delete')
    removecartitem.addEventListener('click', cartRemove)
    
    // <div class="cartinfo">
    // console.log(cartInfo)
    

}

function showUserCart(){
  
    const cartempty=document.querySelector('.cartempty')
    const cartModal =document.querySelector('.cart-modal')
   
    const main = document.querySelector('main')
    const checkout =document.querySelector('.submit-cart')
    main.addEventListener('click', cartoff)
    function cartoff(){
        cartModal.style.display='none'
    }
  
    
    if (counter.textContent>0){
        cartModal.style.display='block'
        cartempty.style.display='none'
        cartInfo.style.display='block'
        
        
       
        
    }
    else{
        cartModal.style.display='block'
        cartempty.style.display='block'
        cartInfo.style.display='none'
        
        
    }
    
   
} 

const removecartitem = document.querySelector('.delete')
removecartitem.addEventListener('click', cartRemove)
function cartRemove(e) {
    counter.textContent===parseInt(counter.textContent)
    
    let parent= e.target.parentElement
    const removeMe = parent.parentElement
    
     const itemsPicked = removeMe.querySelector('.itemsPicked')
     console.log(itemsPicked)
     itemsPicked.textContent===parseInt(itemsPicked.textContent)
     counter.textContent = parseInt(counter.textContent)-parseInt(itemsPicked.textContent)
   
    cartInfo.removeChild(removeMe)
   

}


const closeNav = document.querySelector('.close-icon')
const hamburger = document.querySelector('.hamburger')
const navMenu=document.querySelector('.nav-links')


hamburger.addEventListener('click', openNav)
closeNav.addEventListener('click', closeNavBar)

function openNav(){
    closeNav.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navMenu.classList.add('open-mobile-nav')
}

function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closeNav.classList.remove('open-nav')
    navMenu.classList.remove('open-mobile-nav')
}
//Remove chats.
var dom = $;
var contacts = setInterval(function() {
	let rmBtn = dom(".js-im-contact-remove");
	if(rmBtn){
		rmBtn.click();
		setTimeout(function(){
			dom(".js-im-confirm-delete").click();
		}, 1500);
	}else{
		clearInterval(contacts);
	}
}, 3000);


//remove all  likes.
var rmvBtns = document.querySelectorAll('[data-element-name="vote-no"]');
var count = 0;

var likes = setInterval(function(){

	if(rmvBtns.length > count){
		console.log('step - ' + count);
		rmvBtns[count].click();
		count++;

	}else{
		clearInterval(likes);
	}
}, 2000);

//Like btn



var like = setInterval(function(){
	var likeBtn = document.querySelector('[data-choice="yes"]');
	if(!like){
		clearInterval(like);
	}

},  2000);
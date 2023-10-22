var cond = 0, MsgUpdtTime = -108, timerId, msgTxt, autoTypId, txtIndx = 0, msgOrder = 0, SpeechOrdr = 0, SpeechText, posReply = 0, negReply = 0, moodVaule = 0, BlowValue, CmoodValue, BarTimerId, Wtimer1, Wtimer2, TxtTimer1, TxtTimer2, TxtTimer3, TxtTimer4, TxtTimer5, TxtTimer6, GiftTimerId1, GiftTimerId2, GiftTimerId3, GiftTimerId4, currentTop, GiftTimerId5, GiftTimerId6, GiftTimerId7, GiftTimerId8, GiftTimerId9, GiftTimerId10, GiftTimerId11, GiftTimerId12, GiftTimerId13, GiftTimerId14, GiftTimerId15, GiftTimerId16, GiftTimerId17, GiftTimerId18, GiftTimerId19, BlowTimerID1, BlowTimerID2, BlowTime = 0, maxBlowValue;
var GftVis = false;
var EvntVis = false;
var ScreenWidth;

function init() {
	ScreenWidth = screen.width;
}

init();

function updateMood() {
	CmoodValue = document.getElementById("moodBar").value;
	BarTimerId = setInterval(updateValue, 20);
}

function updateValue() {
	if (CmoodValue <= moodVaule) {
		document.getElementById("moodBar").value = CmoodValue;
		document.getElementById("MScore").innerHTML = CmoodValue;
		if (CmoodValue == moodVaule) {
			clearInterval(BarTimerId);
		}
		if (CmoodValue != 100){
			CmoodValue++;
		}
	}
	else if (CmoodValue >= moodVaule) {
		document.getElementById("moodBar").value = CmoodValue;
		document.getElementById("MScore").innerHTML = CmoodValue;
		if (CmoodValue == moodVaule) {
			clearInterval(BarTimerId);
		}
		if(CmoodValue != 0){
			CmoodValue--;
		}		
	}
}

function PlaySequence() {
	setTimeout(LoadingScreen,3000);
}

function LoadingScreen() {
	document.getElementById("LoadingScreen").style.display = "none";
	document.getElementById("uselessBtn").style.display = "block";

}

function StartPlay() {
	document.getElementById("uselessBtn").style.display = "none";
	document.getElementById("EntryMsg").style.display = "block";
	musicPlay();
	setTimeout(StartSnowing,1000);
}

function StartSnowing() {
	GftVis = true;
	setTimeout(GiftShow, 1000);
}

function GiftShow () {
	timerId = setInterval(updtMsg, 15);
}

function musicPlay() {
	document.getElementById('audioID').play();
}

function updtMsg() {
	MsgUpdtTime++;
	if(MsgUpdtTime < 21){
		document.getElementById("MsgBox").style.top = MsgUpdtTime + "%";
	}
	else if (MsgUpdtTime > 120) {
		clearInterval(timerId);
		setTimeout(StartWriting, 100)
	}
}

function StartWriting() {
	document.getElementById("aniMsg").style.display = "block";
	msgOrder = 1;
	MsgOrderList();
}

function MsgOrderList() {
	switch(msgOrder){
		case 1:{
			msgTxt = "Hey! Mysterious Person ******** !!";
			break;
		}
		case 2:{
			msgTxt = "You got a special message from AMD !";
			break;
		}
		case 3:{
			msgTxt = "Tap to open it !";
			break;
		}
	}
	autoTypId = setInterval(AutoType, 100);
}

function AutoType() {
	if (txtIndx < msgTxt.length) {
		document.getElementById("MsgWrite").innerHTML += msgTxt.charAt(txtIndx);
		txtIndx++;
	}
	else if (txtIndx == msgTxt.length) {
		clearInterval(autoTypId);
		if (msgOrder < 3) {
			setTimeout(ClearTxt, 600);
		}
		else if (msgOrder == 3){
			document.getElementById("MsgBox").style.cursor = "pointer";
			document.getElementById("MsgBox").addEventListener('click', bigEvent);
			MsgHighlite();
		}
	}
}

function MsgHighlite () {
	var temp = document.getElementById("MsgBox").getElementsByTagName("Span");
	for (var i = 0; i <= temp.length; i++){
		temp[i].style.opacity = "1";
	}
}

function ClearTxt() {
	txtIndx = 0;
	document.getElementById("MsgWrite").innerHTML = "";
	msgOrder++;
	MsgOrderList();
}

function bigEvent() {
	document.getElementById("EntryMsg").style.transform = "rotateY(180deg)";
	setTimeout(hideGift, 2000);
	
}

function hideGift () {
	document.getElementById("EntryMsg").style.display = "none";
	document.getElementById("TheEvent").style.display = "block";
	DrawStarNow();
	MoonRise();	
}

function MoonRise () {
	document.getElementById("Bbody").id = "Cbody";
	document.getElementById("moon").style.top = "57px";
	setTimeout(FlyX, 2000);
}

function FlyX () {
	if(ScreenWidth > 900) {
		document.getElementById("entry").style.left = "27%";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("entry").style.left = "8%";
	}
	setTimeout(FlyR, 500);
}

function FlyR () {
	document.getElementById("entry").style.transform = "rotate(-20deg)";
	setTimeout(FlyY, 1000);
}

function FlyY () {
	if(ScreenWidth > 900) {
		document.getElementById("entry").style.top = "220%";
	}
	else if(ScreenWidth <= 900) {
		document.getElementById("entry").style.top = "72%";
	}
	setTimeout(FLyTrn, 4000);
}

function FLyTrn () {
	document.getElementById("entry").style.display = "none";
	document.getElementById("normal").style.display = "block";
	document.getElementById("moodMeter_container").style.display = "inline-flex";
	document.getElementById("MoodScore").style.display = "block";
	SpeechOrdr = 1;
	setTimeout(SpeechStart, 1000);
	moodVaule = moodVaule + 50;
	updateMood();
}

function SpeechStart() {
	document.getElementById("SpeechBubble").style.display = "block";
	SpchOrderList();
}

function SpchOrderList() {
	switch(SpeechOrdr){
		case 0:{
			// document.getElementById("SpeechBubble").style.display = "none";
			// SpeechOrdr = -1;
			break;
		}
		case 1:{
			SpeechText = "Hi! ******";
			SpeechOrdr = 2;
			WriteSpeech();
			break;
		}
		case 2:{
			SpeechText = "You know usually when I talk!";
			SpeechOrdr = 3;
			WriteSpeech();
			break;
		}
		case 3:{
			SpeechText = "Either I talk too much";
			SpeechOrdr = 4;
			WriteSpeech();
			break;
		}
		case 4:{
			SpeechText = "or";
			SpeechOrdr = 5;
			WriteSpeech();
			break;
		}
		case 5:{
			SpeechText = "I say things that makes no sense!";
			SpeechOrdr = 6;
			WriteSpeech();
			break;
		}
		case 6:{
			SpeechText = "But let's not talk about these now!";
			SpeechOrdr = 7;
			WriteSpeech();
			break;
		}
		case 7:{
			SpeechText = "I know I am kinda weird and all!";
			SpeechOrdr = 8;
			WriteSpeech();
			break;
		}
		case 8:{
			SpeechText = "But";
			SpeechOrdr = 9;
			WriteSpeech();
			break;
		}
		case 9:{
			SpeechText = "Today is a very special day!!";
			SpeechOrdr = 10;
			WriteSpeech();
			break;
		}
		case 10:{
			SpeechText = "Anyway! first tell me...!";
			SpeechOrdr = 11;
			WriteSpeech();
			break;
		}
		case 11:{
			SpeechText = "How are you feeling today?";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer1 = setTimeout(textRply1, 1500);	
			break;
		}
		case 12:{
			SpeechText = "That's what i like to hear";
			SpeechOrdr = 14;
			WriteSpeech();
			break;
		}
		case 13:{
			SpeechText = "I am here to make it better";
			SpeechOrdr = 14;
			WriteSpeech();
			break;
		}
		case 14:{
			SpeechText = "Let's celebrate this special day together";
			SpeechOrdr = 15;
			WriteSpeech();
			break;
		}
		case 15:{
			SpeechText = "See this night sky...!";
			SpeechOrdr = 16;
			WriteSpeech();
			break;
		}
		case 16:{
			SpeechText = "And all the twinkling stars (Kinda) !";
			SpeechOrdr = 17;
			WriteSpeech();
			break;
		}
		case 17:{
			SpeechText = "And that big round thingy on top-left corner";
			SpeechOrdr = 18;
			WriteSpeech();
			break;
		}
		case 18:{
			SpeechText = "I meant the 'Moon'";
			SpeechOrdr = 19;
			WriteSpeech();
			break;
		}
		case 19:{
			SpeechText = "You see all of these!!";
			SpeechOrdr = 20;
			WriteSpeech();
			break;
		}
		case 20:{
			SpeechText = "All of these are artificial!";
			SpeechOrdr = 21;
			WriteSpeech();
			break;
		}
		case 21:{
			SpeechText = "I know! But the point is..";
			SpeechOrdr = 22;
			WriteSpeech();
			break;
		}
		case 22:{
			SpeechText = "You live no where near to me";
			SpeechOrdr = 23;
			WriteSpeech();
			break;
		}
		case 23:{
			SpeechText = "So that I can go and do all these in real life!";
			SpeechOrdr = 24;
			WriteSpeech();
			break;
		}
		case 24:{
			SpeechText = "So you know! let's just pretend like";
			SpeechOrdr = 25;
			WriteSpeech();
			break;
		}
		case 25:{
			SpeechText = "All of these happening in real life! LOL";
			SpeechOrdr = 26;
			WriteSpeech();
			break;
		}
		case 26:{
			SpeechText = "Anyway!!";
			SpeechOrdr = 27;
			WriteSpeech();
			break;
		}
		case 27:{
			SpeechText = "Did you like my surprise!?";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer2 = setTimeout(textRply2, 1500);	
			break;
		}
		case 28:{
			SpeechText = "Yayy! I am really glad that you liked it";
			SpeechOrdr = 30;
			WriteSpeech();
			break;
		}
		case 29:{
			SpeechText = "Ummmmm! Okayyyy....!";
			SpeechOrdr = 31;
			WriteSpeech();
			break;
		}
		case 30:{
			SpeechText = "Here are some flowers for you!";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer3 = setTimeout(textRply3, 1500);	
			break;
		}
		case 31:{
			SpeechText = "I brought some flowers for you!";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer3 = setTimeout(textRply3, 1500);	
			break;
		}
		case 32:{
			SpeechText = "Yayyy!!!";
			SpeechOrdr = 34;
			WriteSpeech();
			break;
		}
		case 33:{
			SpeechText = "sigh !";
			SpeechOrdr = 36;
			WriteSpeech();	
			break;
		}
		case 34:{
			SpeechText = "Hang-on!";
			SpeechOrdr = 35;
			WriteSpeech();
			break;
		}
		case 35:{
			SpeechText = "I brought some chocolate's too!";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer4 = setTimeout(textRply4, 1500);
			break;
		}
		case 36:{
			SpeechText = "How about some chocolate ?";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer4 = setTimeout(textRply4, 1500);
			break;
		}
		case 37:{
			SpeechText = "Thank you!";
			SpeechOrdr = 39;
			WriteSpeech();
			break;
		}
		case 38:{
			SpeechText = "Nevermind! I'll have it myself!";
			SpeechOrdr = 39;
			WriteSpeech();
			break;
		}
		case 39:{
			SpeechText = "You might be wondering";
			SpeechOrdr = 40;
			WriteSpeech();
			break;
		}
		case 40:{
			SpeechText = "What's the point of all these!?";
			SpeechOrdr = 41;
			WriteSpeech();
			break;
		}
		case 41:{
			SpeechText = "I mean! it's quite obvious...";
			SpeechOrdr = 42;
			WriteSpeech();
			break;
		}
		case 42:{
			SpeechText = "That I'll go a bit creazy...";
			SpeechOrdr = 43;
			WriteSpeech();
			break;
		}
		case 43:{
			SpeechText = "Since! it's my \"bestfriend's\" birthday...";
			SpeechOrdr = 44;
			WriteSpeech();
			break;
		}
		case 44:{
			SpeechText = "So! let's patryy..!!!!";
			SpeechOrdr = 45;
			WriteSpeech();
			break;
		}
		case 45:{
			SpeechText = "It's time for the final surprise!";
			SpeechOrdr = 46;
			WriteSpeech();
			break;
		}
		case 46:{
			SpeechText = "Are you ready???";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer5 = setTimeout(textRply5, 1500);
			break;
		}
		case 47:{
			SpeechText = "C'mon *****! It's your Birthday...!";
			SpeechOrdr = 48;
			WriteSpeech();
			break;
		}
		case 48:{
			SpeechText = "Here comes your final surprise!";
			SpeechOrdr = 0;
			WriteSpeech();
			GiftTimerId1= setTimeout(droneEnter, 3000);
			break;
		}
		case 49:{
			SpeechText = "Happy! Birthday ******!!..";
			SpeechOrdr = 50;
			WriteSpeech();
			break;
		}
		case 50:{
			SpeechText = "Here is your virtual Birthday cake! lol...";
			SpeechOrdr = 51;
			WriteSpeech();
			break;
		}
		case 51:{
			SpeechText = "Hang-on!!!";
			SpeechOrdr = 52;
			WriteSpeech();
			break;
		}
		case 52:{
			SpeechText = "Let me light up the candle for you! lol...";
			SpeechOrdr = 0;
			WriteSpeech();
			GiftTimerId10 = setTimeout(CandleSeq, 3000);
			break;
		}
		case 53:{
			SpeechText = "Hey! Look!!";
			SpeechOrdr = 54;
			WriteSpeech();
			break;
		}
		case 54:{
			SpeechText = "Artificial shooting stars!! lol...";
			SpeechOrdr = 55;
			WriteSpeech();
			break;
		}
		case 55:{
			SpeechText = "Close your eye's and make a wish! lol...";
			SpeechOrdr = 0;
			WriteSpeech();
			TxtTimer6 = setTimeout(textRply6, 1500);
			break;
		}
		case 56:{
			document.getElementById("shooringStar").style.display = "none";
			SpeechText = "I wish all your prayers...";
			SpeechOrdr = 57;
			WriteSpeech();
			break;
		}
		case 57:{
			SpeechText = "All your dreams...";
			SpeechOrdr = 58;
			WriteSpeech();
			break;
		}
		case 58:{
			SpeechText = "All the happiness...";
			SpeechOrdr = 59;
			WriteSpeech();
			break;
		}
		case 59:{
			SpeechText = "That you deserve in your life!";
			SpeechOrdr = 60;
			WriteSpeech();
			break;
		}
		case 60:{
			SpeechText = "May Allah give you...";
			SpeechOrdr = 61;
			WriteSpeech();
			break;
		}
		case 61:{
			SpeechText = "And also bless you with...";
			SpeechOrdr = 62;
			WriteSpeech();
			break;
		}
		case 62:{
			SpeechText = "Success, good health and great future...";
			SpeechOrdr = 63;
			WriteSpeech();
			break;
		}
		case 63:{
			SpeechText = "And a life full of opportunities!";
			SpeechOrdr = 64;
			WriteSpeech();
			break;
		}
		case 64:{
			SpeechText = ".....lol.....!";
			SpeechOrdr = 65;
			WriteSpeech();
			break;
		}
		case 65:{
			SpeechText = "Now blow out the candle!! lol...";
			SpeechOrdr = 0;
			WriteSpeech();
			GiftTimerId13 = setTimeout(CandleBlow, 3000);
			break;
		}
		case 66:{
			SpeechText = "Yayyy!!!";
			SpeechOrdr = 67;
			WriteSpeech();
			break;
		}
		case 67:{
			SpeechText = "Wish you an amazing birthday!";
			SpeechOrdr = 68;
			WriteSpeech();
			break;
		}
		case 68:{
			SpeechText = "Enjoy your day!...";
			SpeechOrdr = 69;
			WriteSpeech();
			break;
		}
		case 69:{
			SpeechText = "I'll go now..!";
			SpeechOrdr = 70;
			WriteSpeech();
			break;
		}
		case 70:{
			SpeechText = "Take care...!";
			SpeechOrdr = 71;
			WriteSpeech();
			break;
		}
		case 71:{
			SpeechText = "Byeeee...!!";
			SpeechOrdr = 0;
			WriteSpeech();
			GiftTimerId19 = setTimeout(FlyOutSeq, 3000);
			break;
		}
	}
}

function WriteSpeech() {
	document.getElementById("BubbleText").innerHTML = "";
	document.getElementById("BubbleText").innerHTML = SpeechText;
	Wtimer1 = setTimeout(SpeechPause, 3000);
}

function SpeechPause() {
	if (SpeechOrdr != 0){
		document.getElementById("SpeechBubble").style.display = "none";
	}
	Wtimer2 = setTimeout(SpeechStart, 700);
}

function clearWriteTimer() {
	clearTimeout(Wtimer1);
	clearTimeout(Wtimer2);
}

function HideSpeechBtn() {
	document.getElementById("ReplyBtns").style.display = "none";
	document.getElementById("SpeechBubble").style.display = "none";
}

function FunctionPos() {
	switch(posReply){
		case 1: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 12;
			SpeechPause();
			break;
		}
		case 2: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 28;
			SpeechPause();
			break;
		}
		case 3: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 32;
			document.getElementById("giftContainer").style.display = "none";
			SpeechPause();
			break;
		}
		case 4: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 37;
			document.getElementById("giftContainer").style.display = "none";
			SpeechPause();
			break;
		}
		case 5: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 48;
			SpeechPause();
			break;
		}
		case 6: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 56;
			SpeechPause();
			break;
		}
		case 25: {
			posReply = 0;
			negReply = 0;
			clearTimeout(GiftTimerId4);
			document.getElementById("ReplyBtns").style.display = "none";
			document.getElementById("DroneCon").style.top = "19%";
			document.getElementById("giftPic").style.display = "none";
			GiftTimerId6 = setTimeout(DroneLeaveSeq, 1500);
			break;
		}
	}
	if (moodVaule <= 100 && moodVaule >= 0) {
		moodVaule = moodVaule + 10;
		updateMood();
	}
}

function FunctionNeg() {
	switch(negReply) {
		case 1: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 13;
			SpeechPause();
			break;
		}
		case 2: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 29;
			SpeechPause();
			break;
		}
		case 3: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 33;
			document.getElementById("giftContainer").style.display = "none";
			SpeechPause();
			break;
		}
		case 4: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 38;
			document.getElementById("giftContainer").style.display = "none";
			SpeechPause();
			break;
		}
		case 5: {
			clearWriteTimer();
			HideSpeechBtn();
			posReply = 0;
			negReply = 0;
			SpeechOrdr = 47;
			SpeechPause();
			break;
		}
	}
	if (moodVaule >= 0 && moodVaule <= 100) {
		moodVaule = moodVaule - 10;
		updateMood();
	}
}

function textRply1() {
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Good";
	document.getElementById("BtnNeg").innerHTML = "Okayish";
	posReply = 1;
	negReply = 1;
	clearTimeout(TxtTimer1);
}

function textRply2() {
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Yeah";
	document.getElementById("BtnNeg").innerHTML = "Nah";
	posReply = 2;
	negReply = 2;
	clearTimeout(TxtTimer2);
}

function textRply3() {
	document.getElementById("giftContainer").style.display = "block";
	document.getElementById("giftType").src = "img/flower.png";
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "I'll take it";
	document.getElementById("BtnNeg").innerHTML = "I don't like flowers";
	posReply = 3;
	negReply = 3;
	clearTimeout(TxtTimer3);
}

function textRply4() {
	document.getElementById("giftContainer").style.display = "block";
	document.getElementById("giftType").src = "img/chocolet.png";
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Okay! I'll have it";
	document.getElementById("BtnNeg").innerHTML = "I don't want chocolate";
	posReply = 4;
	negReply = 4;
	clearTimeout(TxtTimer4);
}

function textRply5() {
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Yes!";
	document.getElementById("BtnNeg").innerHTML = "Not sure";
	posReply = 5;
	negReply = 5;
	clearTimeout(TxtTimer5);
}

function textRply6() {
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Okay!";
	document.getElementById("BtnNeg").innerHTML = "";
	document.getElementById("BtnNeg").style.display = "none";
	posReply = 6;
	negReply = 0;
	clearTimeout(TxtTimer6);
}

function droneEnter() {
	clearTimeout(GiftTimerId1);
	clearWriteTimer();
	document.getElementById("SpeechBubble").style.display = "none";
	document.getElementById("DroneCon").style.display = "block";
	GiftTimerId2= setTimeout(droneFly, 1500);
}

function droneFly() {
	clearTimeout(GiftTimerId2);
	document.getElementById("DroneCon").style.left = "45%";
	GiftTimerId3= setTimeout(droneHover, 1000);
}

function droneHover() {
	clearTimeout(GiftTimerId3);
	GiftTimerId4 = setInterval(HoverEffect, 700);
	currentTop = 19;
	GiftTimerId5 = setTimeout(OpenBtn, 2500);
}

function OpenBtn() {
	AddOpen();
}

function AddOpen() {
	clearTimeout(GiftTimerId5);
	if(ScreenWidth > 900){
		document.getElementById("ReplyBtns").style.display = "inline-flex";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("ReplyBtns").style.display = "block";
	}
	document.getElementById("BtnPos").innerHTML = "Open It!";
	document.getElementById("BtnNeg").innerHTML = "";
	document.getElementById("BtnNeg").style.display = "none";
	posReply = 25;
	negReply = 0;
}

function HoverEffect() {
	var i = 23;
	if(currentTop <= i){	
		document.getElementById("DroneCon").style.top = currentTop + "%";
		currentTop++;
		if (currentTop > i){
			currentTop = 19;
		}
	}
}

function DroneLeaveSeq() {
	clearTimeout(GiftTimerId6);
	if(ScreenWidth > 900){
		document.getElementById("DroneCon").style.left = "-30%";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("DroneCon").style.left = "-80%";
	}
	GiftTimerId7 = setTimeout(MainGiftVis, 2500);
}

function MainGiftVis() {
	clearTimeout(GiftTimerId7);
	document.getElementById("DroneCon").style.display = "none";
	document.getElementById("CakeBody").style.display = "block";
	GiftTimerId9 = setTimeout(WishHer, 1000);
}

function WishHer() {
	clearTimeout(GiftTimerId9);
	clearWriteTimer();
	HideSpeechBtn();
	posReply = 0;
	negReply = 0;
	SpeechOrdr = 49;
	SpeechPause();
}

function CandleSeq() {
	clearTimeout(GiftTimerId10);
	clearWriteTimer();
	document.getElementById("SpeechBubble").style.display = "none";
	GiftTimerId8 = setTimeout(LightUpCandel, 1000);
}

function LightUpCandel() {
	clearTimeout(GiftTimerId8);
	document.getElementById("flame").style.display = "block";
	document.getElementById("flameShadow").style.display = "block";
	GiftTimerId11 = setTimeout(StartShooting, 1000);
}

function StartShooting() {
	document.getElementById("shooringStar").style.display = "Block";
	GiftTimerId12 = setTimeout(MakeAwish, 1000);
}

function MakeAwish() {
	clearTimeout(GiftTimerId12);
	clearWriteTimer();
	HideSpeechBtn();
	posReply = 0;
	negReply = 0;
	SpeechOrdr = 53;
	SpeechPause();
}

function CandleBlow() {
	clearTimeout(GiftTimerId13);
	clearWriteTimer();
	document.getElementById("SpeechBubble").style.display = "none";
	GiftTimerId14 = setTimeout(BlowBtnVis, 1000);
}

function BlowBtnVis() {
	clearTimeout(GiftTimerId14);
	document.getElementById("blowCandle").style.display = "block";
}

function blowInc() {
	BlowValue = document.getElementById("blowBar").value;
	maxBlowValue = document.getElementById("blowBar").max;
	if(BlowValue <= maxBlowValue){
		BlowTimerID1 = setInterval(IncValue, 1);
		clearInterval(BlowTimerID2);
	}	
}

function IncValue() {
	if(BlowTime <= maxBlowValue){
		BlowValue =  BlowTime;
		document.getElementById("blowBar").value = BlowValue;
		BlowTime++;
	}
}

function blowDec() {
	if(BlowValue != maxBlowValue){
		clearInterval(BlowTimerID1);
		BlowTimerID2 = setInterval(DecValue, 1);
	}
	else {
		clearInterval(BlowTimerID1);
		document.getElementById("blowCandle").style.display = "none";
		document.getElementById("flame").style.display = "none";
		document.getElementById("flameShadow").style.display = "none";
		document.getElementById("skyText").style.display = "block";
		cond = 1;	
		GiftTimerId15 = setTimeout(setup,1);
		GiftTimerId16 = setTimeout(SkyTxtDown, 500)
		if (moodVaule <= 100 && moodVaule >= 0) {
			moodVaule = moodVaule + 10;
			updateMood();
		}
	}
}

function DecValue() {
	if(BlowTime >= 0){
		BlowValue = BlowTime;
		document.getElementById("blowBar").value = BlowValue;
		BlowTime--;
	}
	else if(BlowTime == 0){
		clearInterval(BlowTimerID2);
	}
}

function SkyTxtDown() {
	clearTimeout(GiftTimerId16);
	GiftTimerId17 = setTimeout(SkyTxtRot, 300)
	document.getElementById("skyText").style.top = "13%";
}

function SkyTxtRot() {
	clearTimeout(GiftTimerId17);
	document.getElementById("skyText").style.transform = "rotateX(0deg)";
	GiftTimerId17 = setTimeout(LastText, 1500)
}

function LastText() {
	clearTimeout(GiftTimerId18);
	clearWriteTimer();
	HideSpeechBtn();
	posReply = 0;
	negReply = 0;
	SpeechOrdr = 66;
	SpeechPause();
}

function FlyOutSeq() {
	clearTimeout(GiftTimerId19);
	clearWriteTimer();
	HideSpeechBtn();
	document.getElementById("normal").style.display = "none";
	document.getElementById("entry").style.display = "block";
	setTimeout(OutX, 2000);
}

function OutX () {
	if(ScreenWidth > 900){
		document.getElementById("entry").style.top = "50%";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("entry").style.top = "13%";
	}
	setTimeout(OutR, 1000);
}

function OutR () {
	document.getElementById("entry").style.transform = "rotate(22deg)";
	setTimeout(OutY, 1000);
}

function OutY () {
	document.getElementById("entry").style.left = "130%";
	setTimeout(EndingSeq, 1000);
}

function EndingSeq() {
	document.getElementById("flame").style.display = "block";
	document.getElementById("flameShadow").style.display = "block";
	setTimeout(Ending, 1000);
}

function Ending() {
	document.getElementById("entry").style.display = "none";
	if(ScreenWidth > 900){
		document.getElementById("CakeBody").style.left = "45%";
	}
	else if(ScreenWidth <= 900){
		document.getElementById("CakeBody").style.left = "37%";
		setTimeout(ContentRearrange, 3000);
	}
	setTimeout(ReWatch, 5000);
}

function ContentRearrange() {
	document.getElementById("CakeBody").style.top = "40%";
	document.getElementById("skyText").style.top = "27%";
}

function ReWatch() {
	document.getElementById("reloadPage").style.display = "block";
}

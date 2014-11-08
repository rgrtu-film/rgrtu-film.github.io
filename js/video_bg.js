function BgVideo(youtubeCode, title) {
	this.youtubeCode = youtubeCode;
	this.title = title;
	this.description = "";
	this.startAt = 0;
	this.imageUrl = null;
}

BgVideo.prototype.play = function() {
	var videos = [
	            {videoURL:this.youtubeCode,
								containment:'body',
								autoPlay:true,
								mute:true,
								startAt:this.startAt,
								opacity:1,
								loop:true,
								ratio:"16/9",
								addRaster:true},
	]
	jQuery(".player").YTPlaylist(videos, false, null);
}

var vid1 = new BgVideo("hkdPLpLBGnA","Test 1");
vid1.play();


//Только на больших устройствах
//На маленьких утсройствах выключаем
// if (screen.width >= 600) {
// 	var videos = ["hkdPLpLBGnA", "KGk5OCROXzw","FgetliSQCUM"];
// 	var rndVideo = videos[Math.floor(Math.random()* videos.length)];
//
// 	jQuery(".player").mb_YTPlayer();
// } else {
// 	$('.player').hide();
// }

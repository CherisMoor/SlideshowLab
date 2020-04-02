
//Create a single object named `slideshow` that represents the data and functionality of a picture slideshow
var slideshow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4','photo5'],
    
//An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
    currentPhotoIndex: 0,

//A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
              this.pause();
        }
    },

//A `prevPhoto()` function that does the same thing, but backwards
    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');
        }
    },

//A function `getCurrentPhoto()` that returns the current photo from the list
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },

//create an empty property named playInterval
    playInterval: null,

//play() function that moves to the next photo ever 2000ms until the end    
    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

//pause() function that stops the slideshow    
    pause: function() {
        clearInterval(this.playInterval);
        }
    }
slideshow.play()
//slideshow.pause();
//slideShow.previousPhoto();
//slideShow.getCurrentPhoto();
//slideShow.nextPhoto();
//slideShow.nextPhoto();
//slideShow.nextPhoto();
//slideShow.nextPhoto();
//slideShow.nextPhoto();
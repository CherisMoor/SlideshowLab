
//Create a single object named `slideshow` that represents the data and functionality of a picture slideshow
var slideShow=
{
//An array called `photoList` that contains the names of the photos as strings
    photoList: ['photo1', 'photo2', 'photo3','photo4', 'photo5'],
    
//An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
    currentPhotoIndex: 0, //0='photo'1

//A function `getCurrentPhoto()` that returns the current photo from the list
    getCurrentPhoto: function()
    {
		console.log("The current slide is: " + this.photoList[this.currentPhotoIndex]);
    },

//A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one
    nextPhoto:function()
    {
        if(this.currentPhotoIndex < (this.photoList.length-1))
        {
		this.currentPhotoIndex++;
		console.log("The next slide is: " + this.photoList[this.currentPhotoIndex]);
		}else
		console.log("End of slideshow");
    },

//A `prevPhoto()` function that does the same thing, but backwards
    previousPhoto:function()
    {
        if(this.currentPhotoIndex>0)
        {
		this.currentPhotoIndex--;
		console.log("Previous photo is: "+this.photoList[this.currentPhotoIndex]);
		}else
		console.log("Start of slideshow");
    }
}



slideShow.previousPhoto();
slideShow.getCurrentPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
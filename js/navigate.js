
var comics = [
	"images/protostrip1.png",
	"images/protostrip2.png",
	"images/protostrip3.png",
	"images/protostrip4.png"
];

var currentComic = 0;

function goToComic(comicIndex) {
  
	if(comics[comicIndex]) {
    
	    currentComic = comicIndex;
	    $('#Comic').attr('src', comics[currentComic]);
  }
}

$('a.next').click(
	function() {
    
    	goToComic(currentComic + 1);
    
  }
);

$('a.previous').click(
	function() {
    
    	goToComic(currentComic - 1);
    
  }  
);


$('a.first').click(
	function() {
    
    	goToComic(0);
    
  }
);

$('a.last').click(
	function() {
    	
    	goToComic(comics.length - 1);
    
  }
);

$('a.random').click(
	function() {
    
    	var nextComic = currentComic;
     
     	while(nextComic == currentComic) {
       
       	nextComic = Math.floor(Math.random()*comics.length);
		}
     
     	goToComic(nextComic);
	}
 );
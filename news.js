fetch( 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8d23d27a6c0047d999c8178f109a03a7'

	//8d23d27a6c0047d999c8178f109a03a7
	
)
.then(response =>response.json() )
.then(json=>{
	
	console.log(json.articles);
	// let x=new Array;
	// for(let i=0;i<20;i++)
	//  x[i] =json.articles[i].description;

	 console.log(json.articles[0].urlToImage)
	//x=x.toString();
   document.querySelector('#d1').innerHTML=json.articles[0].content;
   document.getElementById("i1").src =json.articles[0].urlToImage;
   document.querySelector('#t1').innerHTML=json.articles[0].title;
   document.getElementById("l1").href = json.articles[0].url;

   document.querySelector('#d2').innerHTML=json.articles[1].content;
   document.getElementById("i2").src =json.articles[1].urlToImage;
   document.querySelector('#t2').innerHTML=json.articles[1].title;
   document.getElementById("l2").href = json.articles[1].url;


   document.querySelector('#d3').innerHTML=json.articles[2].content;
   document.getElementById("i3").src =json.articles[2].urlToImage;
   document.querySelector('#t3').innerHTML=json.articles[2].title;
   document.getElementById("l3").href = json.articles[2].url;


   document.querySelector('#d4').innerHTML=json.articles[3].content;
   document.getElementById("i4").src =json.articles[3].urlToImage;
   document.querySelector('#t4').innerHTML=json.articles[3].title;
   document.getElementById("l4").href = json.articles[3].url;
   

})//.items.snippet.thumbnails.high))
.catch(err => {
	console.log(err);
});



// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "4bca0d37d5mshbcc12129ee2c496p1ec011jsn54e2c2f1323c"
// 	}
// })

// .then(response =>response.json() )
// .then(json=>{
	
// 	console.log(json.data[0].link);
// 	// let x=new Array;
// 	// for(let i=0;i<20;i++)
// 	//  x[i] =json.articles[i].description;

// 	// console.log(x)
// 	//x=x.toString();
//   // document.querySelector('.h').innerHTML=json.articles[0].description;;
   

// })//.items.snippet.thumbnails.high))
// .catch(err => {
// 	console.log(err);
// });




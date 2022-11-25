fetch('https://retry202103069.herokuapp.com/service')
  .then(response => response.json())
  .then(json => {
   

    // for features


    mainContainer2 = document.getElementById('featued');
    console.log(json.services)
    
      
        
     var originalContent2 = ` 
    
     <div class="card">
       <img src="assets/img/featured-1.jpg" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title"><a href="">[TITLE2]</a></h5>
         <p class="card-text">[DESCRIPTION2]</p>
         <a href="#" class="btn">Explore more</a>
       </div>
     </div>
     
     `;
 
 json.features.forEach(e => {
   var currentContent2 = originalContent2;
   currentContent2 = currentContent2.replace(`[TITLE2]`,e["A"])
   currentContent2 = currentContent2.replace(`[DESCRIPTION2]`,e["B"])
  // currentContent2 = currentContent2.replace(`[ICON2]`,e["C"])
 
   var div2 = document.createElement('div')
   div2.className = "col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0"
   div2.innerHTML = currentContent2;
   mainContainer2.appendChild(div2);



})

mainContainer = document.getElementById('mainContainer');
console.log(json.services)

  
    
 var originalContent = ` 
                         <div class="icon"><i class="[ICON]"></i></div>
                         <h4 class="title"><a href="">[TITLE]</a></h4>
                         <p class="description">[DESCRIPTION]</p>`;

json.services.forEach(e => {
var currentContent = originalContent;
currentContent = currentContent.replace(`[TITLE]`,e["A"])
currentContent = currentContent.replace(`[DESCRIPTION]`,e["B"])
currentContent = currentContent.replace(`[ICON]`,e["C"])

var div = document.createElement('div')
div.className = "col-lg-4 col-md-6 icon-box"
div.innerHTML = currentContent;
mainContainer.appendChild(div);




  })

   
    });

 
    
    
    
    
    
    
    
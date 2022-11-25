fetch('https://retry202103069.herokuapp.com/service')
  .then(response => response.json())
  .then(json => {
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
});


     })

  
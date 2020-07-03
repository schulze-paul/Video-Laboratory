buttonArticle = [];

function buttonArticleFun(formId, question, buttonData, buttonLabel) {
  buttonCount = buttonData.length;

  buttonArticle[1] = `<article class="buttonArticle" id="article${formId}">
  <h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" id="button0${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)">
<label>
${buttonLabel[0]}
</label>
</div>
</div>
</article>`;

  buttonArticle[2] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">

<div class= "buttonOpen" id="button0${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
>
<label
    
  >
    ${buttonLabel[0]}
  </label>
</div>

  <div class= "buttonOpen" id="button1${formId}"
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  >
<label
  
>
  ${buttonLabel[1]}
</label>
</div>

</div>
</article>`;

  buttonArticle[3] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" id="button0${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
>
<label
    
  >
    ${buttonLabel[0]}
  </label>
</div>
  <div class= "buttonOpen" id="button1${formId}"
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  >
<label
  
>
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" id="button2${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
>
<label

>
${buttonLabel[2]}
</label>
</div>
</div>
</article>`;

  buttonArticle[4] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" id="button0${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
>
<label
    
  >
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
<label
>
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
id="button2${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
</div>
</article>`;

  buttonArticle[5] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
id="button0${formId}"
>
<label
>
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
<label
>
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
id="button2${formId}"
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[4]}, 4)"
id="button4${formId}"
>
<label
>
${buttonLabel[4]}
</label>
</div>
</div>
</article>`;

  buttonArticle[6] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
id="button0${formId}"
>
<label
  >
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
<label
>
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
id="button2${formId}"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[4]}, 4)"
id="button4${formId}"
>
<label
>
${buttonLabel[4]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[5]}, 5)"
id="button5${formId}"
>
<label
>
${buttonLabel[5]}
</label>
</div>
</div>
</article>`;

  buttonArticle[7] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
id="button0${formId}"
>
<label
  >
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
<label
>
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
id="button2${formId}"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[4]}, 4)"
id="button4${formId}"
>
<label
>
${buttonLabel[4]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[5]}, 5)"
id="button5${formId}"
>
<label
>
${buttonLabel[5]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[6]}, 6)"
id="button6${formId}"
>
<label
>
${buttonLabel[6]}
</label>
</div>
</div>
</article>`;

  buttonArticle[8] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
id="button0${formId}"
>
<label
  >
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
  <label
  >
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
id="button2${formId}"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[4]}, 4)"
id="button4${formId}"
>
<label
>
${buttonLabel[4]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[5]}, 5)"
id="button5${formId}"
>
<label
>
${buttonLabel[5]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[6]}, 6)"
id="button6${formId}"
>
<label
>
${buttonLabel[6]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[7]}, 7)"
id="button7${formId}"
>
<label
>
${buttonLabel[7]}
</label>
</div>
</div>
</article>`;

  buttonArticle[11] = `<article class="buttonArticle" id="article${formId}">
<h4>${question}</h4>
<div class="buttonContainer">
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[0]}, 0)"
id="button0${formId}"
>
<label
  >
    ${buttonLabel[0]}
    </label>
</div>
  <div class= "buttonOpen" 
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]}, 1)"
  id="button1${formId}"
  >
  <label
  >
  ${buttonLabel[1]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[2]}, 2)"
id="button2${formId}"
>
<label
>
${buttonLabel[2]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[3]}, 3)"
id="button3${formId}"
>
<label
>
${buttonLabel[3]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[4]}, 4)"
id="button4${formId}"
>
<label
>
${buttonLabel[4]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[5]}, 5)"
id="button5${formId}"
>
<label
>
${buttonLabel[5]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[6]}, 6)"
id="button6${formId}"
>
<label
>
${buttonLabel[6]}
</label>
</div>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[7]}, 7)"
id="button7${formId}"
>
<label
>
${buttonLabel[7]}
</label>
</div>
</div>
</article>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[8]}, 8)"
id="button8${formId}"
>
<label
>
${buttonLabel[8]}
</label>
</div>
</div>
</article>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[9]}, 9)"
id="button9${formId}"
>
<label
>
${buttonLabel[9]}
</label>
</div>
</div>
</article>
<div class= "buttonOpen" 
onclick="javasript:formButtonPressed(${formId},${buttonData[10]}, 10)"
id="button10${formId}"
>
<label
>
${buttonLabel[10]}
</label>
</div>
</div>
</article>`;

  return buttonArticle[buttonCount];
}

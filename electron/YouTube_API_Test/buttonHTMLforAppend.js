buttonArticle = [];

function buttonArticleFun(formId, question, buttonData, buttonLabel) {
  buttonCount = buttonData.length;

  buttonArticle[1] = `<article class="item" id="article${formId}">
  <h4>${question}</h4>
  <button
      onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
      class="btn btn-primary"
      id="button0${formId}"
    >
      ${buttonLabel[0]}
    </button>
</article>`;

  buttonArticle[2] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>

</article>`;

  buttonArticle[3] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
</article>`;

  buttonArticle[4] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[3]}
</button>
</article>`;

  buttonArticle[5] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[3]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[4]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[4]}
</button>
</article>`;

  buttonArticle[6] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[3]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[4]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[4]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[5]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[5]}
</button>
</article>`;

  buttonArticle[7] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[3]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[4]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[4]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[5]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[5]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[6]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[6]}
</button>
</article>`;

  buttonArticle[8] = `<article class="item" id="article${formId}">
<h4>${question}</h4>
<button
    onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
    class="btn btn-primary"
    id="button0${formId}"
  >
    ${buttonLabel[0]}
  </button>
  <button
  onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
  class="btn btn-primary"
  id="button0${formId}"
>
  ${buttonLabel[1]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[2]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[3]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[4]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[4]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[5]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[5]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[6]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[6]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[7]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[7]}
</button>
<button
onclick="javasript:formButtonPressed(${formId},${buttonData[8]})"
class="btn btn-primary"
id="button0${formId}"
>
${buttonLabel[8]}
</button>
</article>`;

  return buttonArticle[buttonCount];
}

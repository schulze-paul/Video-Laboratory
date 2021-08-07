


class htmlHandler {

    constructor() {}

    getButtonFormSection(formId, question, buttonData, buttonLabel) {
        head = `<article class="buttonArticle" id="article${formId}">
                <p class="question">${question}</p>
                <div class="buttonContainer">`;
    
        foot = `</div>
            </article>`;
    
        buttonArticles = getButtons(formId, buttonData, buttonLabel);
    
        full_div = head + buttonArticles + foot;
    
        return full_div;
    }
    
    getButtons(formId, buttonData, buttonLabel) {
        articles = ``
    
        for (index = 0; index < buttonData.length; index++) {
    
        article = `<div class= "buttonOpen" id="button${index}${formId}"
                    onclick="javasript:formButtonPressed(${formId},${buttonData[index]}, ${index})">
                    <label>
                    ${buttonLabel[index]}
                    </label>
                    </div>`;
        articles = articles + article;
        console.log(articles);
        }
        return articles;
    }

    
}

function switchView() {
    win.loadURL(
      url.format({
        pathname: path.resolve(__dirname, "new_approach", "form_page.html"),
        protocol: "file:",
        slashes: true,
      })
    );
};
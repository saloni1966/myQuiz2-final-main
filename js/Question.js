class Question{
  constructor(){
      this.input = createInput("Enter your name");
      this.button = createButton("Submit");
      this.input1 = createInput("Enter correct option")
      
  }
  hide(){
      this.input.hide();
      this.input1.hide();
      this.button.hide();
  }
  display(){
      var title = createElement("h3");
      title.html("MY QUIZ QUESTION");
      title.position(450,25);
      
      var ques1 = createElement("h4");
      ques1.html("Q1. What starts and ends with letter 'E' but has onlt one letter ?")
      ques1.position(250,100);
      var option1 = createElement("h4");
      option1.html("A. Everyone");
      option1.position(300,150)
      var option2 = createElement("h4");
      option2.html("B. Envelope")
      option2.position(300,170)
      var option3 = createElement("h4");
      option3.html("C. Estimate");
      option3.position(300,190)
      var option4 = createElement("h4");
      option4.html("D. Example")
      option4.position(300,210);

      this.input.position(350,267);
      this.input1.position(550,267);
      this.button.position(400,300);
      
      this.button.mousePressed(()=>{
        
         
              this.input.hide();
              this.input1.hide();
              contestant.name = this.input.value();
              contestant.answer = this.input1.value();
             
             
              contestantCount += 1
              contestant.index=contestantCount
              contestant.updateCount(contestantCount);
              contestant.update();
             
  

      })

  }

}
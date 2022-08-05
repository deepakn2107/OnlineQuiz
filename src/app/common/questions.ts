export class Questions {

    // "quesId" : 1,
    //   "question" : "Which of the following is not a Java features?",
    //   "option1" : "Dynamic",
    //   "option2" : "Architecture Neutral",
    //   "option3" : "Use of pointers",
    //   "option4" : "Object-oriented",
    //   "answer" : "Use of pointers",
    //   "qId" : 10,

    constructor(public question:string,
                public option1:string,
                public option2:string,
                public option3:string,
                public option4:string,
                public answer:string,
                public qId:number              
                ){}
}

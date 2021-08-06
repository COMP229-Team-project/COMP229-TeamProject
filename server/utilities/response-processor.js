"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateResponse = exports.processResponses = void 0;
function processResponses(survey) {
    let responseFrequency = {
        response1: [0, 0, 0, 0],
        response2: [0, 0, 0, 0],
        response3: [0, 0, 0, 0],
        response4: [0, 0, 0, 0],
    };
    survey.responses.forEach((responseCollection) => {
        for (const response in responseCollection) {
            switch (responseCollection[response]) {
                case "1":
                    responseFrequency[response][0] += 1;
                    break;
                case "2":
                    responseFrequency[response][1] += 1;
                    break;
                case "3":
                    responseFrequency[response][2] += 1;
                    break;
                case "4":
                    responseFrequency[response][3] += 1;
                    break;
            }
        }
    });
    return responseFrequency;
}
exports.processResponses = processResponses;
function templateResponse(survey, responseFrequency) {
    let content = ``;
    survey.questions.forEach((questions, index) => {
        content += `
      <tr>
        <th colspan="2">
          ${questions["question" + (index + 1)]}
        </th>
       </tr>
       <tr>
       <th align="left">
         Answer
       </th>
       <th>
       Frequency
      </th>
      </tr>
       <tr>
        <td>
          ${questions.answer1} 
        </td>
        <td>
          ${responseFrequency["response" + (index + 1)][0]}
        </td>
       </tr>
       <tr>
       <td>
         ${questions.answer2} 
       </td>
       <td>
       ${responseFrequency["response" + (index + 1)][1]}
       </td>
      </tr>
      <tr>
      <td>
        ${questions.answer3} 
      </td>
      <td>
      ${responseFrequency["response" + (index + 1)][2]}
      </td>
     </tr>
     <tr>
     <td>
       ${questions.answer4} 
     </td>
     <td>
     ${responseFrequency["response" + (index + 1)][3]}
     </td>
    </tr>
  
       `;
    });
    let templateString = `<table>${content}</table>`;
    return templateString;
}
exports.templateResponse = templateResponse;
//# sourceMappingURL=response-processor.js.map
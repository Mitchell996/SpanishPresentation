window.onload=function(){ 
    var quiz = {
        title: 'Prueba de equivalentes de \"to  run\"',
        questions: [
          {
            html: '1. Soy Mitt Romney y " " senador de Utah.  -Im running for this office.',
            responses: [
              {text: 'estoy corriendo por'}, 
              {text: 'aspiro a', correct: true}, 
            ]
          }, {
            text: "2. La salsa es tan picante que su nariz \"he has a running nose\".",
            responses: [
              {text: 'gotear', correct: true}, 
              {text: 'correr'},
            ]
          }, {
            text: "3. Ayer, \"I ran into my friend who I haven't seen in a while\"." ,
            responses: [
              {text: 'me gotee\' con'},
              {text: 'me tropeze\'; con', correct: true},
            ]
          }, {
            text: "4. Solo Superman puede \"to run\" rapidamente como un tren.",
            responses: [
              {text: 'postularse'},
              {text: 'correr', correct: true},
            ]
          }, {
            text: "5. Senora disculpe \"is your fridge running\"",
            responses: [
              {text: 'corriendo'}, 
              {text: 'funcionando', correct: true},
            ]
          }, {
            text: "6. Mi amigo y yo \"are running an event\"",
            responses: [
              {text: 'dirigimos', correct: true}, 
              {text: 'tropezamos'},
            ]
          }, {
            text: "7. Si cuando lavo la ropa blanca pongo una media, calcetín rojo entonces el color \"runs\".",
            responses: [
              {text: 'se corre', correct: true},
              {text: 'se extiende'},
            ]
          }, {
            text: "8. La liebre \"runs\"mas rapido que la tortuga.",
            responses: [
              {text: 'corriendo'}, 
              {text: 'corre', correct: true},
            ]
          }, {
            text: "9. Los limites de la cuidad \"run\" desde el rio hasta las montanas.",
            responses: [
              {text: 'corren'},
              {text: 'se extienden', correct: true},
            ]
          }, {
            text: "10. Ese transbordador \"runs \" hasta Palenque.",
            responses: [
              {text: 'corre'}, 
              {text: 'va', correct: true},
            ]
          }     
        
        ]
      };
            
      new Vue({
        el: '#app',
        data: {
          quiz: quiz,
          questionIndex: 0,
          userResponses: Array(quiz.questions.length).fill(false)
        },

        methods: {
          
          next: function() {
            this.questionIndex++;
          },
          
          prev: function() {
            this.questionIndex--;
          },
     
          score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
          },
        }
      });
    };
  
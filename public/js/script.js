//Data
var projectData = [
     {
          "text": "The Future Of Inqiury",
          "fontFamily": "'Cinzel Decorative', serif",
          "fontWeight": "bold",
          "img": "../public/imgs/schoolboard.svg",
          "imgPosition": "translateX(55%) translateY(10%)",
          "backgroundColor": "#ffffff",
          "buttonTextColor": "white",
          "primaryColor": "#164869",
          "counter": ".01",


          "indicators": {
               "border": "1px solid #164869",
               "active": "#164869"
          },
          "techIcons": [
               "../public/techicons/grey/html-5.svg",
               "../public/techicons/grey/css-3.svg",
               "../public/techicons/grey/js.svg",
               "../public/techicons/grey/animejs.svg",
               "../public/techicons/grey/bootstrap-4.svg",
               "../public/techicons/grey/firebase.svg",
               "../public/techicons/grey/jquery.svg",
               "../public/techicons/grey/marko.svg",
               "../public/techicons/grey/nodejs.svg",
               "../public/techicons/grey/sass.svg"
          ],
         "fonts": [
              {
                   "id": "Cinzel",
                   "text": "Cinzel Decorative",
                   "fontFamily": "'Cinzel Decorative', serif"
              },
              {
                   "id": "raleway",
                   "text": "Raleway",
                   "fontFamily": "'Raleway', serif"
              }
          ]
     },
     {
          "text": "Robotics engineering inspiring students",
          "fontFamily": "Roboto",
          "fontWeight": 100,
          "img": "../public/imgs/robotics.svg",
          "imgPosition": "translateX(70%) translateY(10%)",
          "backgroundColor": "#000000",
          "backgroundImg": "../public/imgs/roboticsback.svg",
          "buttonTextColor": "black",
          "primaryColor": "white",
          "counter": ".02",

          "indicators": {
               "border": "1px solid white",
               "active": "white"
          },
          "techIcons": [
               "../public/techicons/colored/html-5.svg",
               "../public/techicons/colored/css-3.svg",
               "../public/techicons/colored/js.svg",
               "../public/techicons/colored/bootstrap-4.svg",
               "../public/techicons/colored/jquery.svg",
               "../public/techicons/colored/sass.svg"
          ],
          "fonts": [
               {
                    "id": "roboto",
                    "text": "Roboto",
                    "fontFamily": "'Roboto', sans-serif"
               }
          ]
     },
     {
          "text": "CUSTOM DEVELOPEMT SERVICES",
          "fontFamily": "GothamPro",
          "fontWeight": "bold",
          "img": "../public/imgs/caimage.svg",
          "imgPosition": "translateX(60%) translateY(10%)",
          "backgroundColor": "#ffffff",
          "backgroundImg": "../public/imgs/caback.svg",
          "buttonTextColor": "white",
          "primaryColor": "#489EC0",
          "counter": ".03",

          "indicators": {
               "border": "1px solid #489EC0",
               "active": "#489EC0"
          },
          "techIcons": [
               "../public/techicons/colored/html-5.svg",
               "../public/techicons/colored/css-3.svg",
               "../public/techicons/colored/js.svg",
               "../public/techicons/colored/bootstrap-4.svg",
               "../public/techicons/colored/jquery.svg",
               "../public/techicons/colored/sass.svg"
          ],
          "fonts": [
               {
                    "id": "gotham",
                    "text": "Gotham",
                    "fontFamily": "GothamPro"
               },
               {
                    "id": "raleway",
                    "text": "Raleway",
                    "fontFamily": "'Raleway', serif"
               }
          ]
     },
     {
          "text": "UNIVERSITY STUDENTS DECENTRALIZE HACKATHONS",
          "fontFamily": "'Anton', sans-serif",
          "fontWeight": "100",
          "img": "../public/imgs/diyhacks.svg",
          "imgPosition": "translateX(50%) translateY(10%)",
          "backgroundColor": "#2B2B2B",
          "buttonTextColor": "#2b2b2b",
          "primaryColor": "white",
          "counter": ".04",

          "indicators": {
               "border": "1px solid white",
               "active": "#DD00FF"
          },
          "techIcons": [
               "../public/techicons/white/html-5.svg",
               "../public/techicons/white/css-3.svg",
               "../public/techicons/white/js.svg",
               "../public/techicons/white/bootstrap-4.svg",
               "../public/techicons/white/jquery.svg",
               "../public/techicons/white/sass.svg",
               "../public/techicons/white/nodejs.svg",
               "../public/techicons/white/mongodb.svg",
          ],
          "fonts": [
               {
                    "id": "anton",
                    "text": "Anton",
                    "fontFamily": "'Anton', sans-serif"
               },
               {
                    "id": "raleway",
                    "text": "Raleway",
                    "fontFamily": "'Raleway', serif"
               }
          ]
     },
     {
          "text": "INVEST IN THE FUTURE",
          "fontFamily": "'Kodchasan', sans-serif",
          "fontWeight": "100",
          "img": "../public/imgs/sevc.svg",
          "imgPosition": "translateX(50%) translateY(20%)",
          "backgroundColor": "linear-gradient(to right bottom, #ff0000, #ff6900, #ffa100, #f4d200, #dfff00)",
          "isGradient": true,
          "backgroundImg": "../public/imgs/sevcback.svg",
          "buttonTextColor": "#2b2b2b",
          "primaryColor": "white",
          "counter": ".05",

          "indicators": {
               "border": "1px solid white",
               "active": "white"
          },
          "techIcons": [
               "../public/techicons/colored/html-5.svg",
               "../public/techicons/colored/css-3.svg",
               "../public/techicons/white/js.svg",
               "../public/techicons/colored/bootstrap-4.svg",
               "../public/techicons/colored/jquery.svg",
               "../public/techicons/colored/sass.svg",
               "../public/techicons/colored/nodejs.svg",
               "../public/techicons/white/mongodb.svg",
          ],
          "fonts": [
               {
                    "id": "kodchasan",
                    "text": "Kodchasan",
                    "fontFamily": "'Kodchasan', sans-serif"
               },
               {
                    "id": "raleway",
                    "text": "Raleway",
                    "fontFamily": "'Raleway', serif"
               }
          ]
     }
]

//Functions
     //Streching the landing text
     $.fn.strech_text = function() {
          var elmt          = $(this),
              cont_width    = elmt.width(),
              txt           = elmt.html(),
              one_line      = $('<span class="stretch_it">' + txt + '</span>'),
              nb_char       = elmt.text().length,
              spacing       = cont_width / nb_char,
              txt_width;

          elmt.html(one_line);
          txt_width = one_line.width();

          if (txt_width < cont_width){
               var  char_width     = txt_width/nb_char,
                   ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ;

               one_line.css({'letter-spacing': ltr_spacing});
          } else {
               one_line.contents().unwrap();
               elmt.addClass('justify');
          }
};
     //Moving elements on scroll
     $.fn.moveIt = function(){
          var $window = $(window);

          var instances = [];

          $(this).each(function(){
               instances.push(new moveItItem($(this)));
          });

          window.addEventListener('scroll', function(){
               var scrollTop = $window.scrollTop();
               instances.forEach(function(inst){
                    inst.update(scrollTop);
               });
          }, {passive: true});
}
     var moveItItem = function(el){
          this.el = $(el);
          this.speed = parseFloat(this.el.attr('data-scroll-speed'));
};
     moveItItem.prototype.update = function(scrollTop){
          var $window = $(window);
          var $doc = $(document);
          var startingPos = $doc.height() - $window.height();
          var position = scrollTop - startingPos;
          this.el.css('transform', 'translateY(' + -(position / this.speed) + 'px)');
};
     //Moving elements on mousemove
     $.fn.nameMove = function(x) {
          var focalpoint = $(document).width()/2;
          var movemeter = -(x - focalpoint);
          var position = movemeter/45;
          $(this).css("left", position);
          var background = "linear-gradient("+movemeter/20+"deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)";
          $(this).css("background-image", background);
     }
     $.fn.picMove = function(x) {
          var focalpoint = $(document).width()/2;
          var offset = $("#propic").outerWidth()/2;
          var currentPosition = focalpoint-offset;
          var movemeter = -(x - focalpoint);
          var position = currentPosition + movemeter/10;
          $(this).css("left", position);
     }
     $.fn.elementMove = function(x, y, level) {
          var xfocalpoint = $(document).width()/2;
          var yfocalpoint = $(window).height()/2;
          var xmovemeter = -(x - xfocalpoint);
          var ymovemeter = -(y - yfocalpoint);
          var xposition = xmovemeter/level;
          var yposition = ymovemeter/level;
          $(this).css("left", xposition);
          $(this).css("top", yposition);
     }
     //Loading project-specific data
     $.fn.dataLoad = function(index) {
          var data = projectData[index];
          var pc = $("#projectContainer");

          //Changing background/Image
          pc.css({
               "background-image": "none",
               "background-color": "none"
          });
          if(data.backgroundImg) {
               if(data.isGradient) {
                    pc.css("background-image", `url('${data.backgroundImg}'), ${data.backgroundColor}`);
               }
               else {
                    pc.css({
                         "background-image": `url('${data.backgroundImg}')`,
                         "background-color": data.backgroundColor
                    })
               }
          } else {
               pc.css("background-color", data.backgroundColor)
          }

          //Adding text
          $(this).find("h1").text(data.text).css({
               "font-family": data.fontFamily,
               "font-weight": data.fontWeight
          });
          $("#counter").text(data.counter);

          //Adding picture
          $("#projectSample").attr("src",  `${data.img}`).css("transform", `${data.imgPosition}`);

          //Loading side data
          $("#iconPaste").empty();
          data.techIcons.forEach(src => {
               var div = `
                    <div class = "ts-icon-container col-4">
                         <img class = "ts-icon img-fluid" src = '${src}'/>
                    </div>`;
               $("#iconPaste").append(div);
          });
          $("#fontPaste").empty();
          data.fonts.forEach(fontData => {
               var div = `
                    <div class = "font-row row ">
                         <div class = "font-name col-12 text-center">
                              <p id = '${fontData.id}'>${fontData.text}</p>
                         </div>
                    </div>
          `;
          $("#fontPaste").append(div);
          $(`#${fontData.id}`).css("font-family", `${fontData.fontFamily}`)
     });

          //changing css
          $(".color-change-text").css("color", `${data.primaryColor}`);
          $(".color-change-element").css({
               "background-color": `${data.primaryColor}`,
               "color": `${data.buttonTextColor}`
          });
          $(".indicator").css({
               "border": data.indicators.border,
               "background": "none"
          });
          $(".active").css("background", data.indicators.active);
          $("g").find("path").attr("fill", `${data.primaryColor}`);
     }
     //Changing element opacity

$(document).ready(function() {
     //streching the header text
     $('.stretch').each(function(){
          $(this).strech_text();
     });

     //Moving elements
     $(document).on( "mousemove", function(event) {
          var x = event.pageX;
          var y = event.pageY;
          $("#propic").picMove(x);
          $("#samanozie").nameMove(x);
          $("#projectSample").elementMove(x, y, 45);
          $("#heroText, #dataCol, #headerRow").elementMove(x, y, 25);
     });

	//Making the landing elements move at different speeds on scroll
	$('[data-scroll-speed]').moveIt();

     //Loading data on indicator clicks
     $("#projects").dataLoad(0);
     $(".indicator").click(function() {
          $(".active").removeClass("active");
          var index = $(this).index();
          //Fading out foreground elements
          anime({
               targets: '#projectIMG, #heroText, #dataCol,  #headerRow',
               opacity: [1,0],
               duration: 500,
               delay: anime.stagger(70),
               easing: 'easeOutQuad',
               complete: function() {
                    //fading out background w/ image
                    anime({
                         targets: "#projectContainer",
                         opacity: [1,0],
                         duration: 300,
                         easing: 'easeOutQuad',
                         complete: function() {
                              $("#projects").dataLoad(index);
                              //Fade in background
                              anime({
                                   targets: "#projectContainer",
                                   opacity: [0,1],
                                   duration: 300,
                                   easing: 'easeOutQuad',
                                   complete: function() {
                                        //Fade in foreground elements
                                        anime({
                                             targets: '#projectIMG, #heroText, #dataCol,  #headerRow',
                                             opacity: [0,1],
                                             duration: 500,
                                             delay: anime.stagger(70),
                                             easing: 'easeInOutQuad'
                                        })
                                   }
                              })
                         }
                    })
               }
          });
          $(this).addClass("active");
     })
});

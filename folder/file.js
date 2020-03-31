

<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Кофемашина</title>
    <style>
    
    .container{
      margin:0 50rem 0 0;
      max-width:60%;
    }

    .cof{
      visibility: hidden;
      margin:0.5rem;
    }
    .progress {
        visibility: hidden;
      }
      .coffee-item{
        background:Tan;
        border-radius:50px 0 0 50px;
        font-size:2rem;
        margin:0.5rem;

      }
      .coffee-btn{
        background:DarkRed;
        width:50px;
        height:50px;
        border-radius:50%;
        border:1px solid rgb(0,0,0);
      }
      .coffee-btn:hover{
        background:IndianRed;
        cursor:pointer;
      }
      
      .coffee-btn:active{
        background:maroon;
      }
      #display{
        background:brown;
        color:white;
        width:100%;
        height:150px;
        border:4px groove black;
        margin:0.5rem;
        padding:1rem;
      }
      img[src$="rub.jpg"]{
        cursor:pointer;
      }
      
      img[src$="rub.jpg"]:hover, img[src$="rub.png"]:hover {
        filter:contrast(130%);
      }
      
      #change_tray{
        position:relative;
        background:Tan;
        width:160px;
        height:200px;
      
      }
       #btn_ch{
         margin:0% 18%;
         width:140px;
      }
    
      img[src$="rub.png"]{
        position:absolute;
        width:64px;
        cursor:pointer;
      }
      body{
        margin:0rem;
        background:#c7b39b url(img/дама.jpg)no-repeat fixed center;
        background-size:110%;
      }
    </style>
  </head>
  <body>
    <div class="container my-4 border">
      <div class="row">
        <div class="col-sm-5">
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Американо',38);"></div>
            <span>Американо - 38р.</span>
          </div>
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Капучино',53);"></div>
            <span>Капучино - 53р.</span>
          </div>
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Еспрессо',46);"></div>
            <span>Эспрессо - 46р.</span>
          </div>
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Латте',57);"></div>
            <span>Латте - 57р.</span>
          </div>
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Гляссе',97);"></div>
            <span>Гляссе - 97р.</span>
          </div>
          <div class="coffee-item row">
            <div class="coffee-btn" onclick="getCoffee('Какао',52);"></div>
            <span>Какао - 52р.</span>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="row">
            <div class="col-6">
              <div id="display">
                <p id="info"></p>
                <p id="ballance_info"></p>
                <div class="progress">
                	<div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar"  aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100" ></div>
                </div>
              </div>
              <div id="btn_ch">
               <button onclick="getChange(money.value);" class="btn btn-info">Получить сдачу</button> 
              </div>
              <div class="cof">
                <img id="image" alt="500" width="245">
              </div>
            </div>
            <div class="col-6">
              <input type="hidden" id="money">
              <img src="img/bill_acc.jpg" id="bill_acc" alt="">
              <div id="change_tray"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="img/50rub.jpg"   alt="50">
    <img src="img/100rub.jpg"  alt="100">
    <img src="img/200-rub.jpg" alt="200" width="285px">
    <img src="img/500rub.jpg"  alt="500">
    
    <script>
      let bills = document.querySelectorAll('img[src$="rub.jpg"]');//создаём массив документов хранящих деньги в картинках
      var image=document.getElementById("image");
      var audio  = new Audio();
      audio.preload ='auto';

      let FLAG_WORK=0;
      
      let cof1 =document.querySelector('.cof');//создаём переменную со ссылкой на класс кофейной чашки

      function getCoffee(name,price)
      {
        
        cof1.style.visibility="hidden";       //показываем чашку кофе
        
        HTMLAudioElement.prototype.stop=function()
        {
          this.pause();
          this.currentTime=0.0;
        }
        
        if (FLAG_WORK==0)
        {
          if (money.value >= price)
        {
          if (name=="Американо")     {audio.src="img/643942.mp3"  ;image.src="img/американо.jpg";} else
          if (name=="Гляссе"   )     {audio.src="img/гляссе.mp3"  ;image.src="img/гляссе.jpg"   ;} else
          if (name=="Еспрессо" )     {audio.src="img/эспрессо.mp3";image.src="img/эспрессо.jpg" ;} else
          if (name=="Капучино" )     {audio.src="img/капучино.mp3";image.src="img/капучино.jpg" ;} else
          if (name=="Латте"    )     {audio.src="img/латте.mp3"   ;image.src="img/латте.png"    ;} else
          if (name=="Какао"    )     {audio.src="img/какао.mp3"   ;image.src="img/какао.jpg"    ;}
          
          audio.play();
          
          money.value = money.value - price;
          if (name!="Какао") 
          {
            info.innerHTML = `Кофе ${name} готовится`
            ballance_info.innerHTML = `Ваш балланс: ${money.value} руб.`;
          }  else
            {
              info.innerHTML = `     ${name} готовится`
              ballance_info.innerHTML = `Ваш балланс: ${money.value} руб.`; 
            }
          let progress_bar =document.querySelector('.progress-bar');
          progress_bar.style.visibility="visible"; //меняем свойство (прогрессбара) видимость на "видимый"
          progress_bar.style.width=0+'%';
          let i=0;
          let timeId = setInterval(() => 
          {
            FLAG_WORK=1;//флаг приготовления кофе
            i++;
            progress_bar.style.width=i+'%';
            if (i>100) 
              {
                clearInterval(timeId);
              if (name!="Какао")   info.innerHTML = `Кофе ${name} готов`;
              else
              {info.innerHTML = `     ${name} готов`;}
                let timeOut = setTimeout (() =>          //один раз ждём секунду перед тем как продолжить
                {
                  audio.stop();
                  FLAG_WORK=0;
                  progress_bar.style.visibility="hidden";//скрываем прогрессбар после того как кофе готов
                  progress_bar.style.width=0+'%';
                  cof1.style.visibility="visible";       //показываем чашку кофе
                },1000);
              };
          },80);
        }
        else
          {
            FLAG_WORK=2;
            info.innerHTML = `Недостаточно денег`;
            image.src="img/димон.jpg" ;
            cof1.style.visibility="visible";
            audio.src="img/устрица.mp3";
            audio.play();
            let timeOut2 = setTimeout (()=> 
                {
                  if (FLAG_WORK==2) audio.stop();//чтобы не выключало играющую музыку
                },7000);
          }
        } else 
          {
            info.innerHTML = `Дождитесь завершения операции!`;
          }
      }
      
      function getChange(num){
        money.value = 0;
        ballance_info.innerHTML = `Ваш балланс: ${money.value} руб.`;
        let left = getRandom(0, change_tray.getBoundingClientRect().width-64);
        let top  = getRandom(0, change_tray.getBoundingClientRect().height-64);
        if (num>=10){
          change_tray.innerHTML += `<img style="left:${left}px; top:${top}px;" onclick="this.style.display='none';" src="img/10rub.png">`;
          getChange(num-10);
        }
        else if (num>=5){
          change_tray.innerHTML += `<img style="left:${left}px; top:${top}px;" onclick="this.style.display='none';" src="img/5rub.png">`;
          getChange(num-5);
        }
        else if (num>=2){
          change_tray.innerHTML += `<img style="left:${left}px; top:${top}px;" onclick="this.style.display='none';" src="img/2rub.png">`;
          getChange(num-2);
        }
        else if (num>=1){
          change_tray.innerHTML += `<img style="left:${left}px; top:${top}px;" onclick="this.style.display='none';" src="img/1rub.png">`;
          getChange(num-1);
        }
      }
      
      function getRandom(min,max){
        return Math.random()*(max-min)+min;
      }
      
      for (let i=0; i<bills.length; i++){
        bills[i].addEventListener('mousedown',()=>{
        
          bills[i].style.position = 'absolute';
          bills[i].style.transform = 'rotate(270deg)';

          let onMouseMove = (event)=>{
            bills[i].style.top = event.pageY-bills[i].offsetHeight/2+'px';
            bills[i].style.left = event.pageX-bills[i].offsetWidth/2+'px';
          }
          
          document.addEventListener('mousemove',onMouseMove);
          
          bills[i].addEventListener('mouseup', ()=>{
            document.removeEventListener('mousemove',onMouseMove);
            
            let bill_acc_left = bill_acc.getBoundingClientRect().left;
            let bill_acc_right= bill_acc.getBoundingClientRect().right;
            let bill_acc_top  = bill_acc.getBoundingClientRect().top;
            let bill_acc_bottom=bill_acc.getBoundingClientRect().bottom;
            
            let bill_left     = bills[i].getBoundingClientRect().left;
            let bill_right    = bills[i].getBoundingClientRect().right;
            let bill_top      = bills[i].getBoundingClientRect().top;
            
            if (bill_acc_left<bill_left && bill_acc_right>bill_right 
                && bill_acc_top<bill_top && bill_acc_bottom>bill_top){
              info.innerHTML = ``;
              cof1.style.visibility="hidden";
              if (FLAG_WORK==2) {audio.stop();FLAG_WORK=0;}
              bills[i].style.display = 'none';
              money.value = +money.value + (+bills[i].alt);//тут считываем и запоминаем номинал потраченных денег
              ballance_info.innerHTML = `Ваш балланс: ${money.value} руб.`;
            }
          });
          
        });
        
        bills[i].ondragstart = ()=>{
          return false;
        };
      }
    </script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
</html>

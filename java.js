const reviews = [
    {
            id:"1",
            name: "Tariq jameel",
            img:
            "https://m.media-amazon.com/images/I/615HXNewX7L._SS500_.jpg",
            text:
            "Tariq Jamil (Urdu: طارق جمیل‎; born 1 October 1953), is a Pakistani Islamic television preacher,religious writer, scholar, and a member of the Tablighi Jamaat.He was awarded the Pride of Performance Award in 2020.",
     },
     {
        id:"2",
            name: "Imran Khan",
            img:
            "https://i.tribune.com.pk/media/images/Cover1629095713-0/Cover1629095713-0.jpg",
            text:
            "Imran Ahmed Khan Niazi HI PP (Urdu: عمران احمد خان نیازی‎, born 5 October 1952) is a Pakistani politician and former cricketer who is the 22nd and current prime minister of Pakistan. He is also the chairman of the Pakistan Tehreek-e-Insaf (PTI).",
     },
     {
        id:"3",
            name: "Faiz Hameed",
            img:
            "https://pakistanfrontier.com/wp-content/uploads/2021/09/20210904_144938.jpg",
            text:
            "Islamabad [Pakistan], October 14 (ANI): Faiz Hameed, who was removed as the Director-General of the Inter-Services Intelligence and appointed as the Peshawar Corps Commander, can become the Pakistan Army head with the support of Prime Minister Imran Khan.",
     },
    ];
        const img = document.getElementById("person-img");
        const author = document.getElementById("author");
        const info = document.getElementById("info");
        
        const preBtn = document.querySelector(".pre-button");
        const nextBtn = document.querySelector(".next-button");
        const randomBtn = document.querySelector(".random-btn");
    
        let currentItem = 0;
        window.addEventListener("BOMContentLoaded", function () {
           
            showPerson(currentItem);
    
        });
        function showPerson(person){
            const item =reviews[currentItem];
            img.src = item.img;
            author.textContent =item.name;
            info.textContent = item.text;
        }
        nextBtn.addEventListener("click",function(){
            currentItem++;
            if(currentItem > reviews.length -1){
                currentItem=0;
            }
            showPerson(currentItem);
        });
        preBtn.addEventListener("click",function(){
            currentItem--;
            if(currentItem < reviews.length -1){
                currentItem=0;
            }
            showPerson(currentItem);
        });
       randomBtn.addEventListener("click",function(){
           currentItem=Math.floor(Math.random()*reviews.length);
           showPerson(currentItem);
    
       });
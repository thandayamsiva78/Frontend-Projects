const menuToggle = document.getElementById("menuToggle");
        const closeToggle = document.getElementById("closeToggle");
        const navMobileView = document.getElementsByClassName("navMobileView")[0];

        menuToggle.addEventListener("click" , function(){
            menuToggle.style.display = "none";
            navMobileView.style.display = "block";
            closeToggle.style.display = "block";
            
        })

        closeToggle.addEventListener("click" , function(){
            closeToggle.style.display = "none";
            navMobileView.style.display = "none";
            menuToggle.style.display = "block";
        })


        const craeteDivPopulaArtists = [
            {
                name : "Pritam",
                pasion : "Artist",
                image : "https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                name : "A.R.Rahman",
                pasion : "Artist",
                image : "https://www.thestatesman.com/wp-content/uploads/2022/09/AR-Rahman.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                name : "Sachin-Jigar",
                pasion : "Artist",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp6wojS3HnZji4_XZ5VAg-Xo_W1Kdo5YBSQ&s",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                name : "Arjith-Singh",
                pasion : "Artist",
                image : "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                name : "Anirudh Ravichandar",
                pasion : "Artist",
                image : "https://yt3.googleusercontent.com/nJe_SVpWolKRUUIZijG8Skci04VrgN9uBqEe4oVPKPiLnzCpar5qcwADpPJNNVOWoMeZA3M2RQ=s900-c-k-c0x00ffffff-no-rj",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                name : "Atif Aslam",
                pasion : "Artist",
                image : "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            }
        ];

        craeteDivPopulaArtists.forEach(content => {
            const div = document.createElement("div");
            const h4 = document.createElement("h4")
            const img = document.createElement("img");
            const para = document.createElement("p"); 
            const playBtn = document.createElement("img");

            h4.textContent = content.name;
            para.textContent = content.pasion;
            para.style.color = "gray";
            para.style.fontSize = "14px";
            img.src = content.image;
            img.alt = content.name;
            img.className = "artist-image";
            // img.style.borderRadius = "50%";

            playBtn.src = content.playbtn;
            playBtn.alt = "play-Button";
            playBtn.className = "play-btn";
            playBtn.style.width = "50px";


            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(para);
            div.appendChild(playBtn)
            div.className = "box box1";

            const popularArtists = document.getElementById("popular-artists");
            popularArtists.appendChild(div)
        });






        const craeteDivPopularAlbums = [
            {
                name : "Aashiqui 2",
                para : "Mithon , Ankit Tiwari ,Jeet Gannguli",
                albumImage  : "https://upload.wikimedia.org/wikipedia/en/4/4f/Aashiqui_2.jpeg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                name : "Love hotel",
                para : "leftovermax",
                albumImage  : "https://i.scdn.co/image/ab67616d0000b2731e63de6489803c2b39e7f8e5",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                name : "GLORY",
                para : "Yo Yo Honey Singh",
                albumImage  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmMoo8WMRbUrKB4LOfEJjqmkKr8oA8G01qg&s",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                name : "Making memories",
                para : "Karan Aujila ,Ikky",
                albumImage  : "https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                name : "Aaj Ki Raat (From Stee 2)",
                para : "Sachin",
                albumImage  : "https://www.hindustantimes.com/ht-img/img/2024/09/10/550x309/Kid_Stree_2_Aaj_Ki_Raat_Dance_Teachers_Day_Viral_1725930738410_1725930738566.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                name : "Yeh Jawaani Hai Deewani",
                para : "Pritam",
                albumImage  : "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            }
        ];


        craeteDivPopularAlbums.forEach(content =>{
            const div = document.createElement("div");
            const h4 = document.createElement("h4")
            const img = document.createElement("img");
            const para = document.createElement("p"); 
            const playBtn = document.createElement("img");

            h4.textContent = content.name;
            para.textContent = content.para;
            para.style.color = "gray";
            para.style.fontSize = "14px";
            img.src = content.albumImage;
            img.alt = content.name;
            img.className = "albums-image";
            // img.style.borderRadius = "50%";

            playBtn.src = content.playbtn;
            playBtn.alt = "play-Button";
            playBtn.className = "play-btn";
            playBtn.style.width = "50px";


            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(para);
            div.appendChild(playBtn)
            div.className = "box box2";

            const popularAlbums = document.getElementById("popular-albums");
            popularAlbums.appendChild(div)
           
        })




        const craeteDivPopularRadio = [
            {
                para : "With Sachin-jigar , Artif Aslam , Mintoon and more",
                albumImage  : "radio1.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                para : "With karan Aujila , Shubh , AP Dhilon and more",
                albumImage  : "radio2.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                para : "With Pritam , Mohit Chauhan , Atif Aslam and more",
                albumImage  : "radio3.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                para : "With Harries Jayaraj , Anirudh Ravichandar , Sid Sriram and more",
                albumImage  : "radio4.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                para : "With Digit Dosanjh , Subh , Sindhu , Moose Wala and more",
                albumImage  : "radio5.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            },
            {
                para : "With Guru Randhawa, Badshah, Harrdy Sandhu and more",
                albumImage  : "radio6.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"
            }
        ];


        craeteDivPopularRadio.forEach(content =>{
            const div = document.createElement("div");
            const h4 = document.createElement("h4")
            const img = document.createElement("img");
            const para = document.createElement("p"); 
            const playBtn = document.createElement("img");

            h4.textContent = content.name;
            para.textContent = content.para;
            para.style.color = "gray";
            para.style.fontSize ="13px";
            img.src = content.albumImage;
            img.alt = content.name;
            img.className = "radio-image";
            // img.style.borderRadius = "50%";

            playBtn.src = content.playbtn;
            playBtn.alt = "play-Button";
            playBtn.className = "play-btn";
            playBtn.style.width = "50px";


            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(para);
            div.appendChild(playBtn)
            div.className = "box box3";

            const popularRadio = document.getElementById("popular-radio");
            popularRadio.appendChild(div)
           
        })



        const craeteDivPopularCharts = [
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char1.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char2.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char3.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char4.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char5.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            },
            {
                pasion : "Your weekely update of the most played track right-now -Global",
                image : "char6.jpg",
                playbtn : "https://cdn-icons-png.flaticon.com/128/2088/2088569.png"

            }
        ];

        craeteDivPopularCharts.forEach(content => {
            const div = document.createElement("div");
            const h4 = document.createElement("h4")
            const img = document.createElement("img");
            const para = document.createElement("p"); 
            const playBtn = document.createElement("img");

            h4.textContent = content.name;
            para.textContent = content.pasion;
            para.style.color = "gray";
            para.style.fontSize = "14px";
            img.src = content.image;
            img.alt = content.name;
            img.className = "featured-charts";
            // img.style.borderRadius = "50%";

            playBtn.src = content.playbtn;
            playBtn.alt = "play-Button";
            playBtn.className = "play-btn";
            playBtn.style.width = "50px";


            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(para);
            div.appendChild(playBtn)
            div.className = "box box4";

            const popularCharts = document.getElementById("popular-charts");
            popularCharts.appendChild(div)
        });
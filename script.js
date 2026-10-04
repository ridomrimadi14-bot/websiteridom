 const data = { 
     name: "Ridom Rimadi Husaini", 
     age: 17, 
     school: "SMK Negeri 1 Jakarta",
     major: "teknik komputer dan jaringan",
     bio: "Saya adalah pribadi yang memiliki rasa ingin tahu",
 education: [ 
      {    
     year: "2016 — 2017",   
     level: "TK",  
     name: "TK Adzkiya",
     desc: "Awal perjalanan pendidikan"   
     },

      {   
     year: "2017 — 2023", 
     level: "SD", 
     name: "SD Negeri 3 Pagi",
     desc: "Membangun fondasi dan pengalaman pertama" 
      },

      {   
     year: "2023 — 2026",
     level: "SMP", 
     name: "SMP Negeri 89 Jakarta",
     desc: "Mulai menemukan minat dan mengembangkan kemampuan"  
      },
      
      {
     year: "2026 — NOW",
     level: "SMK",
     name: "SMK Negeri 1 Jakarta",
     desc: "Mengembangkan kompetensi dan mempersiapkan masa depan"   
     } 
     ],
  
      } 

     document.getElementById("heroName").textContent = data.name;
     document.getElementById("fullName").textContent = data.name
     document.getElementById("age").textContent = 
      String(data.age).padStart(2, "0");

     document.getElementById("ageDetail").textContent = `${data.age} Tahun`;
     document.getElementById("schoolDetail").textContent =  data.school; 
     document.getElementById("majorDetail").textContent =  data.major;
     document.getElementById("bio").textContent =  data.bio;

     document.getElementById("timeline").innerHTML = 
      data.education.map(item => `  
          <div class="timeline-item">   
             <div class="timeline-year">    
                 ${item.year}   
             </div>

              <div class="timeline-level">   
                   ${item.level}  
              </div>

               <div>    
                   <div class="timeline-name">     
                        ${item.name}    
              </div>

                <span class="timeline-desc">   
                       ${item.desc}  
             </span>    
             </div>

             <div class="timeline-arrow">   
                  �   
             </div>

               </div> 
             `).join("");

             const observer = new IntersectionObserver( 
                 entries => {

                     entries.forEach(entry => {

                     if (entry.isIntersecting) {     
                           entry.target.classList.add("visible");   
                           }  

                         });

                           }, 
                            {  
                                 threshold: .12 
                                }
                             );

                             document
                               .querySelectorAll(".reveal") 
                               .forEach(el => observer.observe(el));

                               document.addEventListener("mousemove", e => {

                                const x = 
                                   (e.clientX / window.innerWidth - .5) * 2;

                                    const y =  
                                      (e.clientY / window.innerHeight - .5) * 2;

                                         document.querySelector(".orb-one") 
                                           .style.transform =  
                                           `translate(${x * 18}px, ${y * 18}px)`;

                                         document.querySelector(".orb-two") 
                                            .style.transform =  
                                            `translate(${x * -12}px, ${y * -12}px)`;
                                        
                                        });
                                        const photo = 
                                         document.getElementById("profilePhoto");
                                         photo.addEventListener("error", () => { 
                                         photo.style.display = "none";
                                         });
                                         
document.addEventListener("DOMContentLoaded", function() {
    // text content for h2 and h3
    const h2Text = "Undergraduate software developer";
    const h3Text = "Web developer";

    // typing and untyping
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
        type();
    }

    // type and untype h2 and h3
    function typeH2AndH3() {
        const h2Element = document.getElementById("h2typing");
        const h3Element = document.getElementById("h3typing");

        // h2 animation
        typeWriter(h2Element, h2Text, 100, function() {
            // untype h2 and type h3
            setTimeout(function() {
                untypeWriter(h2Element, 50, function() {
                    // h3 animation
                    typeWriter(h3Element, h3Text, 100, function() {
                        // untype h3 and then loop the process
                        setTimeout(function() {
                            untypeWriter(h3Element, 50, typeH2AndH3);
                        }, 1000); 
                    });
                });
            }, 1000); 
        });
    }

    function untypeWriter(element, speed, callback) {
        let text = element.textContent;
        let i = text.length - 1;
        function untype() {
            if (i >= 0) {
                element.textContent = text.substring(0, i);
                i--;
                setTimeout(untype, speed);
            } else {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
        untype();
    }

    // separate h1 from h2andh3
    const h1Element = document.querySelector("h1");
    typeWriter(h1Element, "Sabrina Lone", 100, function() {
        typeH2AndH3();
    });
    const h4Element = document.querySelector("h4");
    typeWriter(h4Element, "Click me to learn more!", 100, function() {
    });

    const clickMeElement = document.getElementById("h4typing");
    const homeButtonElement = document.getElementById("homeButtonTop");
    const homeScreen = document.getElementById("homeScreen");
    const infoScreen = document.getElementById("infoScreen");
    const aboutMeScreen = document.getElementById("aboutMeScreen");
    const projectsMeScreen = document.getElementById("projectsMeScreen");

    clickMeElement.addEventListener("click", function() {
        homeScreen.style.display = "none"; // hide home screen
        infoScreen.style.display = "block"; // info screen pops up
        aboutMeScreen.style.display = "none"; // hide about me screen
        projectsMeScreen.style.display = "none"; // hide projects me screen
    });

    const goBackElement = document.getElementById("homeButton");
    homeButtonElement.addEventListener("click", showHomeScreen);
    goBackElement.addEventListener("click", showHomeScreen);

    function showHomeScreen() {
        homeScreen.style.display = "block"; // go back to home screen
        infoScreen.style.display = "none"; // hide info screen
        aboutMeScreen.style.display = "none"; // hide about me screen
        projectsMeScreen.style.display = "none"; // hide projects me screen
    }

    const aboutMeElement = document.getElementById("aboutMe");
    const aboutMeTopButton = document.getElementById("aboutMeTop");

    aboutMeTopButton.addEventListener("click", function() {
        showAboutMeScreen();
    });

    aboutMeElement.addEventListener("click", function() {
        showAboutMeScreen();
    });

    function showAboutMeScreen() {
        homeScreen.style.display = "none"; // hide home screen
        infoScreen.style.display = "none"; // hide info screen
        aboutMeScreen.style.display = "block"; // display about me screen
        projectsMeScreen.style.display = "none"; // hide projects me screen
    }

    const projectsMeElement = document.getElementById("projectsMe");
    const projectsMeTopButton = document.getElementById("projectsMeTop");

    projectsMeTopButton.addEventListener("click", function() {
        showProjectsMeScreen();
    });

    projectsMeElement.addEventListener("click", function() {
        showProjectsMeScreen();
    });

    function showProjectsMeScreen() {
        homeScreen.style.display = "none"; // hide home screen
        infoScreen.style.display = "none"; // hide info screen
        aboutMeScreen.style.display = "none"; // hide about me screen
        projectsMeScreen.style.display = "block"; // display projects me screen
    }

});
document.addEventListener("DOMContentLoaded", function() {
    const topButtons = document.querySelectorAll(".topButton");
    topButtons.forEach(button => {
        button.addEventListener("click", function() {
            topButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    function showHomeScreen() {
        document.getElementById("homeScreen").style.display = "block";
        document.getElementById("infoScreen").style.display = "none";
        document.getElementById("aboutMeScreen").style.display = "none";
        document.getElementById("projectsMeScreen").style.display = "none";
        document.getElementById("contactMeScreen").style.display = "none"; 
    }

    function showAboutMeScreen() {
        document.getElementById("homeScreen").style.display = "none";
        document.getElementById("infoScreen").style.display = "none";
        document.getElementById("aboutMeScreen").style.display = "block";
        document.getElementById("projectsMeScreen").style.display = "none";
        document.getElementById("contactMeScreen").style.display = "none"; 
    }

    function showProjectsMeScreen() {
        document.getElementById("homeScreen").style.display = "none";
        document.getElementById("infoScreen").style.display = "none";
        document.getElementById("aboutMeScreen").style.display = "none";
        document.getElementById("projectsMeScreen").style.display = "block";
        document.getElementById("contactMeScreen").style.display = "none"; 
    }


    function showContactMeScreen() {
        document.getElementById("homeScreen").style.display = "none";
        document.getElementById("infoScreen").style.display = "none";
        document.getElementById("aboutMeScreen").style.display = "none";
        document.getElementById("projectsMeScreen").style.display = "none";
        document.getElementById("contactMeScreen").style.display = "block"; 
    }


    document.getElementById("homeButtonTop").addEventListener("click", showHomeScreen);
    document.getElementById("aboutMeTop").addEventListener("click", showAboutMeScreen);
    document.getElementById("projectsMeTop").addEventListener("click", showProjectsMeScreen);
    document.getElementById("contactMeTop").addEventListener("click", showContactMeScreen);

    document.getElementById("homeButton").addEventListener("click", showHomeScreen);
    document.getElementById("aboutMe").addEventListener("click", showAboutMeScreen);
    document.getElementById("projectsMe").addEventListener("click", showProjectsMeScreen);
    document.getElementById("contactMe").addEventListener("click", showContactMeScreen);
    
    showHomeScreen();
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const sendButton = document.getElementById("sendButton");


    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

  
        const formData = new FormData(form);

     
        fetch(form.action, {
            method: form.method,
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text(); 
            } else {
                throw new Error("Failed to send message");
            }
        })
        .then(data => {
            if (data === "success") {
                alert("Message sent successfully!");
                form.reset(); 
            } else {
                throw new Error("Failed to send message");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Failed to send message. Please try again later.");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skillsButton = document.getElementById("skillsButton");
    const toolsButton = document.getElementById("toolsButton");
    const nineBoxContainers = document.querySelectorAll(".skill-container");

    nineBoxContainers.forEach(container => {
        container.style.display = 'none';
        
    });

    function showSkillsScreen() {
        skillsButton.style.backgroundColor = "#ff9ee2"; 
        toolsButton.style.backgroundColor = ""; 
        nineBoxContainers.forEach(container => container.classList.add("active")); 
    }

    function showToolsScreen() {
        toolsButton.style.backgroundColor = "#ff9ee2"; 
        skillsButton.style.backgroundColor = ""; 
        nineBoxContainers.forEach(container => container.classList.add("active")); 
    }


    skillsButton.addEventListener("click", showSkillsScreen);
    toolsButton.addEventListener("click", showToolsScreen);
});
document.addEventListener("DOMContentLoaded", function() {
    const skillsButton = document.getElementById("skillsButton");
    const toolsButton = document.getElementById("toolsButton");
    const skillContainers = document.querySelectorAll('.skill-container');
    const toolContainers = document.querySelectorAll('.tool-container');

    function showSkillsScreen() {
        skillContainers.forEach(container => {
            container.style.display = 'block';
        });
        toolContainers.forEach(container => {
            container.style.display = 'none';
        });
    } // creates the effect when skill button is pressed, elements pop up

    function showToolsScreen() {
        toolContainers.forEach(container => {
            container.style.display = 'block'; 
        });
        document.getElementById("toolsScreen").style.display = "block"; 
        document.getElementById("skillsScreen").style.display = "none";

    }

    skillsButton.addEventListener("click", showSkillsScreen);
    toolsButton.addEventListener("click", showToolsScreen);

});

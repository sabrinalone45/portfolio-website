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
    typeWriter(h4Element, "Welcome!", 100, function() {
    });
});

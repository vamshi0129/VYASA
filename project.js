function showProjectGuide() {
    var username = document.getElementById('floatingInput').value; 
    var password = document.getElementById('floatingPassword').value; 

    var validUsers = [
        { username: "22BD1A6621", password: "KMIT123" },
        { username: "22BD1A662M", password: "KMIT123" },
        { username: "22BD1A662U", password: "KMIT123" },
        { username: "22BD1A6639", password: "KMIT123" }
    ];

    var isValidUser = validUsers.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
        var signinBtn = document.getElementById('signinBtn');
        if (signinBtn) {
            // If it exists, add a click event listener
            signinBtn.addEventListener('click', function() {
                // Redirect to 'ABOUTUS.html' when the button is clicked
                window.location.href = 'ABOUTUS.html';
            });
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    }
}

document.getElementById('loginBtn').addEventListener('click', function() {
 
    window.location.href = 'index.html';

});
document.getElementById('aboutusBtn').addEventListener('click', function() {

    window.location.href = 'ABOUTUS.html';

});
document.getElementById('domBtn').addEventListener('click', function() {

    window.location.href = 'DOMAIN.html';

});
document.getElementById('logoutBtn').addEventListener('click', function() {

    window.location.href = 'index.html';

});
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('diveinBtn').addEventListener('click', function() {
 
        window.location.href = 'UNFOLDVYASA.html';
    
    });
    document.getElementById('gobackBtn').addEventListener('click', function() {
 
        window.location.href = 'index.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('domainBtn').addEventListener('click', function() {
 
        window.location.href = 'DOMAIN.html';
    });
    document.getElementById('quitBtn').addEventListener('click', function() {
 
        window.location.href = 'ABOUTUS.html';
    });
});

//sub domains


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('healthCareBtn').addEventListener('click', function() {
 
        window.location.href = 'AIML-HEALTHCARE.html';
    });
    document.getElementById('legalBtn').addEventListener('click', function() {

        window.location.href = 'AIML-LEGAL.html';
    });
    document.getElementById('vrArBtn').addEventListener('click', function() {
 
        window.location.href = 'AIML-VRAR.html';
    });
    document.getElementById('educationBtn').addEventListener('click', function() {
 
        window.location.href = 'AIML-EDUCATION.html';
    });
    document.getElementById('logisticsBtn').addEventListener('click', function() {

        window.location.href = 'AIML-LOGISTICS.html';
    });
    document.getElementById('animationBtn').addEventListener('click', function() {
        
        window.location.href = 'AIML-ANIMATION.html';
    });

    // WEB TECH BUTTONS
    document.getElementById('healthCareWTBtn').addEventListener('click', function() {
 
        window.location.href = 'WEB-HEALTHCARE.html';
    });
    document.getElementById('legalWTBtn').addEventListener('click', function() {

        window.location.href = 'WEB-LEGAL.html';
    });
    document.getElementById('vrArWTBtn').addEventListener('click', function() {
 
        window.location.href = 'WEB-VRAR.html';
    });
    document.getElementById('educationWTBtn').addEventListener('click', function() {
 
        window.location.href = 'WEB-EDUCATION.html';
    });
    document.getElementById('logisticsWTBtn').addEventListener('click', function() {

        window.location.href = 'WEB-LOGISTICS.html';
    });
    document.getElementById('animationWTBtn').addEventListener('click', function() {
        
        window.location.href = 'WEB-ANIMATION.html';
    });

    //DEEP LEARNING BUTTONS

    document.getElementById('healthCareDLBtn').addEventListener('click', function() {
 
        window.location.href = 'DL-HEALTHCARE.html';
    });
    document.getElementById('legalDLBtn').addEventListener('click', function() {

        window.location.href = 'DL-LEGAL.html';
    });
    document.getElementById('vrArDLBtn').addEventListener('click', function() {
 
        window.location.href = 'DL-VRAR.html';
    });
  

    // BLOCK CHAIN BUTTONS

    document.getElementById('healthCareBCBtn').addEventListener('click', function() {
 
        window.location.href = 'BC-HEALTHCARE.html';
    });
    document.getElementById('legalBCBtn').addEventListener('click', function() {

        window.location.href = 'BC-LEGAL.html';
    });
    document.getElementById('vrArBCBtn').addEventListener('click', function() {
 
        window.location.href = 'BC-VRAR.html';
    });
    document.getElementById('educationBCBtn').addEventListener('click', function() {
 
        window.location.href = 'BC-EDUCATION.html';
    });
    document.getElementById('logisticsBCBtn').addEventListener('click', function() {

        window.location.href = 'BC-LOGISTICS.html';
    });
    document.getElementById('animationBCBtn').addEventListener('click', function() {
        
        window.location.href = 'BC-ANIMATION.html';
    });

    // CYBER SECIRUTY BUTTOMS

    document.getElementById('healthCareCSBtn').addEventListener('click', function() {
 
        window.location.href = 'CS-HEALTHCARE.html';
    });
    document.getElementById('legalCSBtn').addEventListener('click', function() {

        window.location.href = 'CS-LEGAL.html';
    });
    document.getElementById('vrArCSBtn').addEventListener('click', function() {
 
        window.location.href = 'CS-VRAR.html';
    });
    document.getElementById('educationCSBtn').addEventListener('click', function() {
 
        window.location.href = 'CS-EDUCATION.html';
    });
    document.getElementById('logisticsCSBtn').addEventListener('click', function() {

        window.location.href = 'CS-LOGISTICS.html';
    });
    document.getElementById('animationCSBtn').addEventListener('click', function() {
        
        window.location.href = 'CS-AUTOMATIVETECH.html';
    });

    //IOT BUTTONS

    document.getElementById('healthCareIOTBtn').addEventListener('click', function() {
 
        window.location.href = 'IOT-HEALTHCARE.html';
    });
    document.getElementById('vrArIOTBtn').addEventListener('click', function() {
 
        window.location.href = 'IOT-VRAR.html';
    });
    document.getElementById('educationIOTBtn').addEventListener('click', function() {
 
        window.location.href = 'IOT-EDUCATION.html';
    });
    document.getElementById('logisticsIOTBtn').addEventListener('click', function() {

        window.location.href = 'IOT-LOGISTICS.html';
    });
    document.getElementById('sportsIOTBtn').addEventListener('click', function() {
        
        window.location.href = 'IOT-SPORTS.html';
    });
    document.getElementById('autotechIOTBtn').addEventListener('click', function() {
        
        window.location.href = 'IOT-AUTOTECH.html';
    });
});
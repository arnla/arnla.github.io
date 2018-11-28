star.onmousedown = function(event) {
    var starCopy = document.getElementById("star").cloneNode(true);
    starCopy.id = "starCopy";
    let shiftX = event.clientX - star.getBoundingClientRect().left;
    let shiftY = event.clientY - star.getBoundingClientRect().top;

    starCopy.style.position = 'absolute';
    starCopy.style.zIndex = 1000;
    document.body.append(starCopy);

    moveAt(event.pageX, event.pageY);

    // centers the star at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        starCopy.style.left = pageX - shiftX + 'px';
        starCopy.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the star on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the star, remove unneeded handlers
    starCopy.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        starCopy.onmouseup = null;
    };
};

star.ondragstart = function() {
    return false;
};



blueBall.onmousedown = function(event) {
    var blueBallCopy = document.getElementById("blueBall").cloneNode(true);
    blueBallCopy.id = "blueBallCopy";
    let shiftX = event.clientX - blueBall.getBoundingClientRect().left;
    let shiftY = event.clientY - blueBall.getBoundingClientRect().top;

    blueBallCopy.style.position = 'absolute';
    blueBallCopy.style.zIndex = 1000;
    document.body.append(blueBallCopy);

    moveAt(event.pageX, event.pageY);

    // centers the blueBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        blueBallCopy.style.left = pageX - shiftX + 'px';
        blueBallCopy.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the blueBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the blueBall, remove unneeded handlers
    blueBallCopy.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        blueBallCopy.onmouseup = null;
    };
};

blueBall.ondragstart = function() {
    return false;
};



redBall.onmousedown = function(event) {
    var redBallCopy = document.getElementById("redBall").cloneNode(true);
    redBallCopy.id = "redBallCopy";
    let shiftX = event.clientX - redBall.getBoundingClientRect().left;
    let shiftY = event.clientY - redBall.getBoundingClientRect().top;

    redBallCopy.style.position = 'absolute';
    redBallCopy.style.zIndex = 1000;
    document.body.append(redBallCopy);

    moveAt(event.pageX, event.pageY);

    // centers the redBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        redBallCopy.style.left = pageX - shiftX + 'px';
        redBallCopy.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the redBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the redBall, remove unneeded handlers
    redBallCopy.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        redBallCopy.onmouseup = null;
    };
};

redBall.ondragstart = function() {
    return false;
};


greenBall.onmousedown = function(event) {
    var greenBallCopy = document.getElementById("greenBall").cloneNode(true);
    greenBallCopy.id = "greenBallCopy";
    let shiftX = event.clientX - greenBall.getBoundingClientRect().left;
    let shiftY = event.clientY - greenBall.getBoundingClientRect().top;

    greenBallCopy.style.position = 'absolute';
    greenBallCopy.style.zIndex = 1000;
    document.body.append(greenBallCopy);

    moveAt(event.pageX, event.pageY);

    // centers the redBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        greenBallCopy.style.left = pageX - shiftX + 'px';
        greenBallCopy.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the redBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the redBall, remove unneeded handlers
    greenBallCopy.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        greenBallCopy.onmouseup = null;
    };
};

greenBall.ondragstart = function() {
    return false;
};



silverBall.onmousedown = function(event) {
    var silverBallCopy = document.getElementById("silverBall").cloneNode(true);
    silverBallCopy.id = "silverBallCopy";
    let shiftX = event.clientX - silverBall.getBoundingClientRect().left;
    let shiftY = event.clientY - silverBall.getBoundingClientRect().top;

    silverBallCopy.style.position = 'absolute';
    silverBallCopy.style.zIndex = 1000;
    document.body.append(silverBallCopy);

    moveAt(event.pageX, event.pageY);

    // centers the silverBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        silverBallCopy.style.left = pageX - shiftX + 'px';
        silverBallCopy.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the silverBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the silverBall, remove unneeded handlers
    silverBallCopy.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        silverBallCopy.onmouseup = null;
    };
};

silverBall.ondragstart = function() {
    return false;
};
star.onmousedown = function(event) {
    let shiftX = event.clientX - star.getBoundingClientRect().left;
    let shiftY = event.clientY - star.getBoundingClientRect().top;

    star.style.position = 'absolute';
    star.style.zIndex = 1000;
    document.body.append(star);

    moveAt(event.pageX, event.pageY);

    // centers the star at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        star.style.left = pageX - shiftX + 'px';
        star.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the star on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the star, remove unneeded handlers
    star.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        star.onmouseup = null;
    };
};

star.ondragstart = function() {
    return false;
};



blueBall.onmousedown = function(event) {
    let shiftX = event.clientX - blueBall.getBoundingClientRect().left;
    let shiftY = event.clientY - blueBall.getBoundingClientRect().top;

    blueBall.style.position = 'absolute';
    blueBall.style.zIndex = 1000;
    document.body.append(blueBall);

    moveAt(event.pageX, event.pageY);

    // centers the blueBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        blueBall.style.left = pageX - shiftX + 'px';
        blueBall.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the blueBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the blueBall, remove unneeded handlers
    blueBall.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        blueBall.onmouseup = null;
    };
};

blueBall.ondragstart = function() {
    return false;
};



redBall.onmousedown = function(event) {
    let shiftX = event.clientX - redBall.getBoundingClientRect().left;
    let shiftY = event.clientY - redBall.getBoundingClientRect().top;

    redBall.style.position = 'absolute';
    redBall.style.zIndex = 1000;
    document.body.append(redBall);

    moveAt(event.pageX, event.pageY);

    // centers the redBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        redBall.style.left = pageX - shiftX + 'px';
        redBall.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the redBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the redBall, remove unneeded handlers
    redBall.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        redBall.onmouseup = null;
    };
};

redBall.ondragstart = function() {
    return false;
};


greenBall.onmousedown = function(event) {
    let shiftX = event.clientX - greenBall.getBoundingClientRect().left;
    let shiftY = event.clientY - greenBall.getBoundingClientRect().top;

    greenBall.style.position = 'absolute';
    greenBall.style.zIndex = 1000;
    document.body.append(greenBall);

    moveAt(event.pageX, event.pageY);

    // centers the greenBall at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        greenBall.style.left = pageX - shiftX + 'px';
        greenBall.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the greenBall on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the greenBall, remove unneeded handlers
    greenBall.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        greenBall.onmouseup = null;
    };
};

greenBall.ondragstart = function() {
    return false;
};



silverBall.onmousedown = function(event) {
    var x = silverBall.getBoundingClientRect().left;
    var y = silverBall.getBoundingClientRect().top;
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
function openProject(proj) {
    if ($(proj).hasClass('toolshareProj')) {
        $('#projectModalTitle').text('ToolShare');
        $('#projectModalContent').empty();
        $('#projectModalContent').append(
            '<p>Completed as the final project for a software entrepreneurship course, this Android application  ' +
            'allows users to rent tools from their neighbours, as well as rent out their own tools. This ' +
            'product is aimed at homeowners who need tools but do not want to buy their own. It also ' +
            'allows owners to earn some extra income from tools that may not be in use.</p>' +
            '<p>This project was completed with three developers and two business analysts. It involved requirements\n' +
            'gathering and coordination with the business analysts. As the lead developer, I worked on the back-end\n' +
            'and front-end. This included UI, database integration and migrations.\n' +
            '</p>' +
            '<div style="text-align: center;"><iframe src="https://drive.google.com/file/d/1trTqT7zW2QghfOM4w_bvFxqxhdOahNca/preview" width="640" height="480"></iframe>' +
            '<br><a href="https://github.com/arnla/ToolShare2" target="_blank">' +
            '<img class="myIcons" src="resources/images/github-icon.png">' +
            'Source Code\n' +
            '</a></div>'
        );
    } else if ($(proj).hasClass('wardProj')) {
        $('#projectModalTitle').text('WARD');
        $('#projectModalContent').empty();
        $('#projectModalContent').append(
            '<p>WARD, which stands for "Well Assessment and Risk Determination", ' +
            'is an ASP.NET MVC web application developed for Canadian Natural Resources Limited. ' +
            'Along with two other developers, I contributed to the development of this application to replace an ' +
            'Excel document which was being used to complete risk assessments of wells.</p>'
        );
    } else if ($(proj).hasClass('seng513Proj')) {
        $('#projectModalTitle').text('SENG513 - Web-based Systems');
        $('#projectModalContent').empty();
        $('#projectModalContent').append(
            '<p><b>Currently in progress</b>, this course provides an overview of software engineering methods and ' +
            'technologies for developing web-based software systems. Here, you can view my assignments as I complete ' +
            'them for the course.</p>' +
            '<a href="https://arnla.github.io/seng513/a1/" target="_blank"><b>Assignment 1</b></a><br>' +
            'The objective of this assignment was to design a simple website with manually crafted HTML and CSS.<br><br> ' +
            'Requirements: ' +
            '<ul><li>Must consist of at least 4 pages</li>' +
            '<li>Must use at least one table</li>' +
            '<li>Must use at least one list</li>' +
            '<li>Must not get stuck on any pages</li></ul>' +
            '<a href="https://arnla.github.io/seng513/a2/" target="_blank"><b>Assignment 2</b></a><br>' +
            'The objective of this assignment was to implement a simple calculator as a web application.<br><br>' +
            'Requirements: ' +
            '<ul><li>Must support all the numbers (including decimals)</li>' +
            '<li>Must evaluate basic math operations (addition, subtraction, multiplication, division)</li>' +
            '<li>Must have a backspace button</li>' +
            '<li>Must support left and right brackets</li>' +
            '<li>Must be able to re-use the previously computer value in the next calculation</li>' +
            '<li>Must work in desktop AND mobile</li></ul>'
        );
    }
}
function createModal(modal_title, row, column) {
    let modal = document.createElement('div'); modal.classList.add('modal');
    let content = document.createElement('div'); content.classList.add('modal-content');

    let header = document.createElement('div'); header.classList.add('modal-header');
    let close_btn = document.createElement('span'); close_btn.classList.add("close");
        close_btn.textContent = '\u00D7';

    let title = document.createElement('h2');
        title.textContent = modal_title;

    header.appendChild(close_btn); header.appendChild(title);

    let student = SEAT_GRID[row][column];
    let body = createForm(student.name, student.email, student.level);

    let footer = document.createElement('div'); footer.classList.add('modal-footer');

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);
    modal.appendChild(content);

    return modal;
}

function createForm(name, email, level) {
    let body = document.createElement('div'); body.classList.add('modal-body');
    body.appendChild(document.createElement('br'));

        let label = document.createElement('label');
        label.for = "name";
        label.textContent = "Name:";

        let input = document.createElement('input');
        input.type = 'text';
        input.name = "name";
        input.id = "name";
        input.value = name;
    
        body.appendChild(label);
        body.appendChild(document.createElement('br'));
        body.appendChild(input);
        body.appendChild(document.createElement('br'));
        body.appendChild(document.createElement('br'));

        let label2 = document.createElement('label');
        label2.for = "email";
        label2.textContent = "Email:";

        let input2 = document.createElement('input');
        input2.type = 'email';
        input2.pattern = '.+\@.+\..+';
        input2.name = "email";
        input2.id = "email";
        input2.value = email;

        let grade_level = document.createElement('label');
        grade_level.htmlFor = 'grade-field';
        grade_level.textContent = 'Grade Level:';

        let grade_form = document.createElement('form');
        grade_form.name = 'grade-field';
        grade_form.id = 'grade-field';

        let first = CreateGradeBubble('First', 'First');
        // want all but first input field to have left space
        first.classList.remove('left-space');
        let second = CreateGradeBubble('Second', 'Second');
        let third = CreateGradeBubble('Third', 'Third');
        let fourth = CreateGradeBubble('Fourth', 'Fourth');

        grade_form.appendChild(first);
        grade_form.appendChild(second);
        grade_form.appendChild(third);
        grade_form.appendChild(fourth);

        grade_form[level].checked = true;


    
        body.appendChild(label2);
        body.appendChild(document.createElement('br'));
        body.appendChild(input2);
        body.appendChild(document.createElement('br'));
        body.appendChild(document.createElement('br'));
        body.appendChild(grade_level);
        body.appendChild(grade_form);
        body.appendChild(document.createElement('br'));
    
    body.appendChild(document.createElement('br'));
    return body;
}

function CreateGradeBubble(level, value) {
    let input_field = document.createElement('input');
    input_field.type = 'radio';
    input_field.value = value;
    input_field.id = level;
    input_field.name = 'grade';
    input_field.classList.add('left-space');

    let input_label = document.createElement('label');
    input_label.htmlFor = level;
    input_label.textContent = level;

    let grade_level_container = document.createElement('div');
    grade_level_container.style = 'display: inline-block; ';
    grade_level_container.appendChild(input_field);
    grade_level_container.appendChild(input_label);

    return grade_level_container;
}
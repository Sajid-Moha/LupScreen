function createModal(modal_title, row, column) {
    let modal = document.createElement('div'); modal.classList.add('modal');
    let content = document.createElement('div'); content.classList.add('modal-content');

    let header = document.createElement('div'); header.classList.add('modal-header');
    let close_btn = document.createElement('span'); close_btn.classList.add("close");
        close_btn.textContent = '\u00D7';

    /* let left_arrow = document.createElement('i');
        left_arrow.classList.add("fa-solid");
        left_arrow.classList.add("fa-arrow-left");
    let right_arrow = document.createElement('i');
        right_arrow.classList.add("fa-solid");
        right_arrow.classList.add("fa-arrow-right"); */


    let title = document.createElement('h2');
        title.innerHTML = `
        <i class="fa-solid fa-arrow-left arrow-nav" style="color: black;
                                                margin-right: 2em;"></i>
        ${modal_title}
        <i class="fa-solid fa-arrow-right arrow-nav" style="color: black;
                                                        margin-left: 2em;"></i>
        `;

    header.appendChild(close_btn); header.appendChild(title);

    let student = SEAT_GRID[row][column];
    console.log(student);
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
        input2.type = 'text';
        input2.name = "email";
        input2.id = "email";
        input2.value = email;
    
        body.appendChild(label2);
        body.appendChild(document.createElement('br'));
        body.appendChild(input2);
        body.appendChild(document.createElement('br'));
        body.appendChild(document.createElement('br'));
    
    body.appendChild(document.createElement('br'));
    return body;
}

/* 
              <label for="grade-field">Grade:</label>
              <form name="grade-field" id="grade-field">
                <input type="radio" value="1" id="first" name="grade" checked>
                <label for="first">First</label>
                <input class="left-space" type="radio" value="2" id="second" name="grade">
                <label for="second">Second:</label>
                <input class="left-space" type="radio" value="3" id="third" name="grade">
                <label for="third">Third</label>
                <input class="left-space" type="radio" value="4" id="fourth" name="grade">
                <label for="fourth">Fourth</label>
              </form>
*/
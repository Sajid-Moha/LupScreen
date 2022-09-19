
function createModal(name, email, level) {
    let modal = document.createElement('div'); modal.classList.add('modal');
    let content = document.createElement('div'); content.classList.add('modal-content');

    let header = document.createElement('div'); header.classList.add('modal-header');
    let close_btn = document.createElement('span'); close_btn.classList.add = 'close';
        close_btn.textContent = '&times;';
    let title = document.createElement('h2');
        title.textContent = 'Student';
    header.appendChild(close_btn); header.appendChild(title);

    let body = createForm(name, email, level);

    let footer = document.createElement('div'); footer.classList.add('modal-footer');

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);
    modal.appendChild(content);

    return modal;
}

function createForm(name, email, level) {
    let body = document.createElement('div'); body.classList.add('modal-body');
    let categories = ['name', 'email'];
    let line_break = document.createElement('br');
    for (let i = 0; i < 2; i++) {
        let label = document.createElement('label');
        label.for = categories[i];
        label.textContent = categories[i];

        let input = document.createElement('input');
        input.type = 'text';
        input.name = categories[i];

        body.appendChild(label);
        body.appendChild(line_break);
        body.appendChild(input);
        body.appendChild(line_break);
        body.appendChild(line_break);
    }

    return body;
}

let mod = createModal('hello', 'hello', 'hello')
let htmlbody = document.querySelector('body');
htmlbody.insertBefore(mod, document.querySelector('#first-child'));

/* 
            <div class="modal-body">
              <label for="student">Name:</label>
              <br>
              <input type="text" name="student">
              <br>
              <br>
              <label for="email">Email:</label>
              <br>
              <input type="text" name="email">
              <br>
              <br>
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
              <br>
            </div> */
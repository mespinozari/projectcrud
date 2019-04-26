export default function Modal(opt) {
  this.element = opt.element;
  this.callback = opt.callbackAcept;
  this.eventClose();
  this.accept();
}

Modal.prototype.open = function() {
  this.element.querySelector('form').reset();
  this.element.classList.add('show');
};

Modal.prototype.edit = function() {
  this.element.classList.add('show');
}

Modal.prototype.close = function() {
  console.log('close')
  this.element.classList.remove('show');
};

Modal.prototype.eventClose = function () {
  const btnclose = this.element.querySelectorAll('.js_close');
  btnclose.forEach(btn => {
    btn.addEventListener('click', this.close.bind(this)); 
  });
}

Modal.prototype.accept = function() {
  this.element
  .querySelector('form')
  .onsubmit = (e) => {
    e.preventDefault();
    this.callback();
    this.close();
  }
}






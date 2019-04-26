import './styles/main.scss';
import Modal from './scripts/ui/modal';
import addUser from './scripts/components/user/user'

function buttonOpenModal(button) {
  const btnadduser = button;
  btnadduser.addEventListener('click',()=>{
    const modal = new Modal({
      element: document.querySelector('.js_modal'),
      callbackAcept: addUser
    });    
    modal.open();
  })
}
buttonOpenModal(document.querySelector('.js_add'));



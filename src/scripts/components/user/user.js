"use strict";
import './user.scss';
import Modal from '../../ui/modal';

export default function addUser() {
  addDom(makeCard(getRef().values));
}

function getRef() {
  const refs = {
    nombres: document.querySelector('.js_modal').querySelector('.js_nombres'),
    apellidos: document.querySelector('.js_modal').querySelector('.js_apellidos'),
    correo: document.querySelector('.js_modal').querySelector('.js_correo'),
    telefono: document.querySelector('.js_modal').querySelector('.js_telefono'),
    pais: document.querySelector('.js_modal').querySelector('.js_pais'),
    url: document.querySelector('.js_modal').querySelector('.js_url'),
    texto: document.querySelector('.js_modal').querySelector('.js_texto')
  }

  const values = {
    nombres: refs.nombres.value,
    apellidos: refs.apellidos.value,
    correo: refs.correo.value,
    telefono: refs.telefono.value,
    pais: refs.pais.value,
    url: refs.url.value,
    texto: refs.texto.value
  }

  return {
    refs,
    values
  };
}

function makeCard(value) {
  const card = document.createElement('div');
  card.innerHTML = makeCardHtml(value);

  card.querySelector('.js_edit').onclick = () => {
    cardEdit(card, value);
  }

  card.querySelector('.js_delete').onclick = () => {
    cardDelete(card);
  }

  return card;
}

function addDom(card) {
  document.querySelector('#users').appendChild(card);
}

function cardEdit(card, value) {
  const { refs } = getRef();
  for (const ref in refs) {
    refs[ref].value = value[ref]
  };

  const modal = new Modal({
    element: document.querySelector('.js_modal'),
    callbackAcept: () => {
      cardSet(card);
    }
  });
  modal.edit();
}

function cardSet(card) {
  const { values: value } = getRef();

  card.innerHTML = makeCardHtml(value);

  card.querySelector('.js_edit').onclick = () => {
    cardEdit(card, value);
  };

  card.querySelector('.js_delete').onclick = () => {
    cardDelete(card);
  }
}

function makeCardHtml(value) {
  return `<div class="card" style="width: 18rem;">
    <span class="js_edit">edit</span><span class="js_delete">delete</span>
    <img src="${value.url}" class="card-img-top" alt="${value.nombres}">
    <div class="card-body">
      <h5 class="card-title">${value.nombres} ${value.apellidos}</h5>
      <p class="card-text">${value.texto}</p>
    </div>
  </div>`;
}

function cardDelete(card) {
  const modal = new Modal({
    element: document.querySelector('.js_modal_delete'),
    callbackAcept: () => {
      card.remove();
    }
  })

  modal.open(); 
}



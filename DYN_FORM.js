'use strict'
/*N.23 Домашнее задание DYN_FORM
Создать проект DYN_FORM. Разработать функцию, которая в переданном ей теге <form> динамически строит элементы формы по переданному ей массиву.
Вызвать эту функцию дважды с указанными ниже массивами, чтобы она построила на веб-странице две формы по указанным ниже образцам. Точном соответствия внешнего вида форм образцам добиваться не обязательно.
В качестве скрипта, обрабатывающего данные форм (атрибут action тега form), можно указывать https://fe.it-academy.by/TestForm.php
var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];*/


var formDef1=
[
    {
      label:'Название сайта:',
      kind:'longtext',
      name:'sitename'
    },
    {
      label:'URL сайта:',
      kind:'longtext',
      name:'siteurl'
    },
    {
      label:'Посетителей в сутки:',
      kind:'number',
      name:'visitors'
    },
    {
      label:'E-mail для связи:',
      kind:'shorttext',
      name:'email'
    },
    {
      label:'Рубрика каталога:',
      kind:'combo',
      name:'division',
      variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]
    },
    {
      label:'Размещение:',
      kind:'radio',
      name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]
    },
    {
      label:'Разрешить отзывы:',
      kind:'check',
      name:'votes'
    },
    {
      label:'Описание сайта:',
      kind:'memo',
      name:'description'
    },
    {
      caption:'Опубликовать',
      kind:'submit'
    },
];

var formDef2=
[
    {
      label:'Фамилия:',
      kind:'longtext',
      name:'lastname'
    },
    {
      label:'Имя:',
      kind:'longtext',
      name:'firstname'
    },
    {
      label:'Отчество:',
      kind:'longtext',
      name:'secondname'
    },
    {
      label:'Возраст:',
      kind:'number',
      name:'age'
    },
    {
      caption:'Зарегистрироваться',
      kind:'submit'
    },
];
function build (formArray, formElement) {   // атрибутами функции явл массив и элемент формы
  for (let element of formArray) { // перебор элементов массива через оператор for...of. Т.е. устанавливаем переменную element для каждой позиции массива formArray
    let br = document.createElement('br');
    formElement.append(br);
    if(element.label) {
      let text = document.createElement('label'); //Тег <label> устанавливает связь между определенной меткой, в качестве которой обычно выступает текст, и элементом формы (<input>, <select>, <textarea>).
      text.innerHTML = element.label;
      formElement.appendChild(text); 
    }
    if (element.kind ==='longtext') {    //element.kind - обращение к элементу в массиве.
      let teg = document.createElement('input'); // создали тег input. Одиночный тег input внутри тега form — элемент формы, конкретный вид которого зависит от атрибута type.
      teg.type='text';
      teg.name = element.name;
      formElement.appendChild(teg); //добавили созданный тег input в форму.
    }
    if (element.kind ==='number') {    
      let teg = document.createElement('input');
      teg.type='number';
      teg.name = element.name;
      formElement.appendChild(teg);
    }
    if (element.kind ==='shorttext') {
      let teg = document.createElement('input');
      teg.type='email';
      teg.name = element.name;
      formElement.appendChild(teg);
    }
    if (element.kind ==='combo') {
      let teg = document.createElement('select');
      teg.name = element.name;
      /* Еще один варинат кода из разбора ДЗ
      element.variants.forEach(option => {
        var optionTag = document.createElement('option');
        optionTag.innerText = option.text;
        optionTag.value = option.value;
        teg.appendChild(optionTag); 
      });*/
      for (let optionElement of element.variants) {
        var optionTag = document.createElement('option');
        optionTag.innerText = optionElement.text;
        optionTag.value = optionElement.value;
        teg.appendChild(optionTag); 
      }
      formElement.appendChild(teg);
    }
    if (element.kind ==='radio') {
      for (let radioElement of element.variants) {
        var radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.value = radioElement.value;
        radioButton.name = element.name;
        formElement.appendChild(radioButton);
        var radioButtonText = document.createTextNode(radioElement.text);
        formElement.appendChild(radioButtonText);
      }
    }
    if (element.kind ==='check') {
      let teg = document.createElement('input');
      teg.type='checkbox';
      teg.name = element.name;
      formElement.appendChild(teg);
    }
    if (element.kind ==='memo') {
      let teg = document.createElement('textarea');
      teg.name = element.name;
      formElement.appendChild(teg);
    }
    if (element.kind ==='submit') {
      let teg = document.createElement('input');
      teg.type='submit';
      teg.value = element.caption;
      formElement.appendChild(teg);
    }
  }  
}

build (formDef1, document.forms.form1);
build (formDef2, document.forms.form2);
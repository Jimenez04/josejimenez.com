var table = document.getElementById('table_works');
  
var array_works = [
  {
    year: 2023,
    proyect: 'Cocoloco Adventure Website',
    tools: ['Laravel', 'PHP', 'CSS', 'HTML', 'JS'],
    link: 'https://cocoloco-sa.com/adventure',
  },
  {
    year: 2022,
    proyect: 'UCR Sede Guanacaste, Project for the Orientation Department (BackEnd)',
    tools: ['Laravel', 'PHP'],
    link: 'https://github.com/Jimenez04/SG_Sistema_de_Orientacion.git',
  },
  {
    year: 2022,
    proyect: 'UCR Sede Guanacaste, Project for the Orientation Department (FrontEnd)',
    tools: ['Laravel', 'PHP', 'CSS', 'HTML', 'JS'],
    link: 'https://github.com/Jimenez04/FrontEnd-app.git',
  },  
  {
      year: 2021,
      proyect: 'Whitehorse Mariteme Website',
      tools: ['WordPress', 'PHP', 'CSS', 'HTML', 'JS'],
      link: 'https://whitehorsemaritime.com',
    },
];
  
filltable();
function filltable() { 
    array_works.map(function(work) {
        add_item(work);
    });
}
function add_item(list) { 
        var tr_container = create_element("tr", '', '', '');
                var td_first = create_element("td", 'column_one', list['year'], '');
                var td_second = create_element("td", 'column_two', list['proyect'], '');
                var td_four = create_element("td", 'column_four', '', '');
                    var a = create_element("a", ' a ', 'Go', list['link']);
                td_four.append(a);
            var td_third = create_element("td", 'column_three', '', '');
            list['tools'].forEach(element => {
                var span = create_element("span", 'tool', element, '');
                td_third.append(span);
            });
            tr_container.append(td_first,td_second,td_third,td_four);
    table.append(tr_container)
}
function create_element(type, _class_css, content, _function) {
    var element = document.createElement(type);
    element.className = _class_css;
    if (content != null || content != "")
        element.textContent = content;
    if (type == "a") { 
        if (_function != null || _function != "")  
            element.setAttribute('href', _function);   
        element.setAttribute('target', '_blank');
    }
    return element;
}
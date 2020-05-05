(function(){'use strict';if('querySelector'in document&&'addEventListener'in window){var body=document.body;var dropdownClick=function(e,_this){e.preventDefault();e.stopPropagation();if(!_this){var _this=this;}
var closestLi=_this.closest('li');var openedSubMenus=_this.closest('nav').querySelectorAll('ul.toggled-on');if(openedSubMenus&&!_this.closest('ul').classList.contains('toggled-on')&&!_this.closest('li').classList.contains('sfHover')){for(var o=0;o<openedSubMenus.length;o++){openedSubMenus[o].classList.remove('toggled-on');openedSubMenus[o].closest('li').classList.remove('sfHover');}}
closestLi.classList.toggle('sfHover');var dropdownToggle=closestLi.querySelector('.dropdown-menu-toggle');if('false'===dropdownToggle.getAttribute('aria-expanded')||!dropdownToggle.getAttribute('aria-expanded')){dropdownToggle.setAttribute('aria-expanded','true');}else{dropdownToggle.setAttribute('aria-expanded','false');}
if(closestLi.querySelector('.sub-menu')){var subMenuSelector='.sub-menu';}else{var subMenuSelector='.children';}
if(body.classList.contains('dropdown-click-menu-item')){_this.parentNode.querySelector(subMenuSelector).classList.toggle('toggled-on');}else if(body.classList.contains('dropdown-click-arrow')){closestLi.querySelector(subMenuSelector).classList.toggle('toggled-on');}}
var parentElementLinks=document.querySelectorAll('.main-nav .menu-item-has-children > a');if(body.classList.contains('dropdown-click-menu-item')){for(var i=0;i<parentElementLinks.length;i++){parentElementLinks[i].addEventListener('click',dropdownClick,true);}}
if(body.classList.contains('dropdown-click-arrow')){for(var i=0;i<document.querySelectorAll('.main-nav .menu-item-has-children > a').length;i++){if('#'==document.querySelectorAll('.main-nav .menu-item-has-children > a')[i].getAttribute('href')){document.querySelectorAll('.main-nav .menu-item-has-children > a')[i].classList.add('menu-item-dropdown-click');}}
var dropdownToggleLinks=document.querySelectorAll('.main-nav .menu-item-has-children > a .dropdown-menu-toggle');for(var i=0;i<dropdownToggleLinks.length;i++){dropdownToggleLinks[i].addEventListener('click',dropdownClick,false);dropdownToggleLinks[i].addEventListener('keydown',function(e){var _this=this;var key=e.which||e.keyCode;if(key===13){dropdownClick(e,_this);}},false);}
for(var i=0;i<document.querySelectorAll('.main-nav .menu-item-has-children > a.menu-item-dropdown-click').length;i++){document.querySelectorAll('.main-nav .menu-item-has-children > a.menu-item-dropdown-click')[i].addEventListener('click',dropdownClick,false);}}
var closeSubMenus=function(){if(document.querySelector('nav ul .toggled-on')){var activeSubMenus=document.querySelectorAll('nav ul .toggled-on');var activeDropdownToggles=document.querySelectorAll('nav .dropdown-menu-toggle');for(var i=0;i<activeSubMenus.length;i++){activeSubMenus[i].classList.remove('toggled-on');activeSubMenus[i].closest('.sfHover').classList.remove('sfHover');}
for(var i=0;i<activeDropdownToggles.length;i++){activeDropdownToggles[i].setAttribute('aria-expanded','false');}}}
document.addEventListener('click',function(event){if(!event.target.closest('.sfHover')){closeSubMenus();}},false);document.addEventListener('keydown',function(e){var key=e.which||e.keyCode;if(key===27){closeSubMenus();}},false);}})();
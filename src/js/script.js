import header from '../blocks/header/header';
import search from '../blocks/header/search/search';
import ellipsis from './ellipsis';
import tabs from './tabs';
import file from './file';
import photo from './photo';
import video from './video';
import products from '../blocks/products/products';
import articles from '../blocks/articles/articles';
import readyProjects from '../blocks/ready-projects/ready-projects';
import faq from './faq';
import fav from './fav';
import card from '../blocks/card/card';
import slider from '../blocks/details-page/slider/slider';
import popup from '../blocks/popup/popup';
import filter from '../blocks/filter/filter';
import production from '../blocks/about-page/production/production';
import categoriesFilter from '../blocks/category-page/categories-filter/categories-filter';
import sortItems from '../blocks/category-page/sort/sort';

document.addEventListener('DOMContentLoaded', () => {
  ellipsis();
  file();
  photo();
  header();
  search();
  tabs();
  video();
  fav();
  faq();
  categoriesFilter();
  filter();
  card();
  slider();
  production();
  products();
  articles();
  readyProjects();
  popup();
  sortItems();
});

(function ($) {
  $.fn.hyphenates = function () {
    var e = '[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]';
    var t = '[аеёиоуыэюя]';
    var n = '[бвгджзклмнпрстфхцчшщ]';
    var r = '[йъь]';
    var i = '­';
    var s = new RegExp('(' + r + ')(' + e + e + ')', 'ig');
    var o = new RegExp('(' + t + ')(' + t + e + ')', 'ig');
    var u = new RegExp('(' + t + n + ')(' + n + t + ')', 'ig');
    var a = new RegExp('(' + n + t + ')(' + n + t + ')', 'ig');
    var f = new RegExp('(' + t + n + ')(' + n + n + t + ')', 'ig');
    var l = new RegExp('(' + t + n + n + ')(' + n + n + t + ')', 'ig');
    this.each(function () {
      var e = $(this).html();
      e = e.replace(s, '$1' + i + '$2');
      e = e.replace(o, '$1' + i + '$2');
      e = e.replace(u, '$1' + i + '$2');
      e = e.replace(a, '$1' + i + '$2');
      e = e.replace(f, '$1' + i + '$2');
      e = e.replace(l, '$1' + i + '$2');
      $(this).html(e);
    });
  };

  $('.hyphen').hyphenates();
})(jQuery);

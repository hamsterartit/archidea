import header from '../blocks/header/header';
import tabs from './tabs';
import video from './video';
import products from '../blocks/products/products';
import articles from '../blocks/articles/articles';
import readyProjects from '../blocks/ready-projects/ready-projects';
import faq from './faq';
import card  from '../blocks/card/card';
import slider  from '../blocks/details-page/slider/slider';
import production  from '../blocks/about-page/production/production';
import categoriesFilter from '../blocks/category-page/categories-filter/categories-filter';

document.addEventListener('DOMContentLoaded', () => {


 /* function createLineBreaks(text) {
    text = new Array(text);
    let lastIndex = 0;
    while (text[lastIndex].length > 42) {
      const temp = text[lastIndex].split(/(?=(?<!.{42,})(?:(?<=[a-zA-Zа-яА-Я]{2})[a-zA-Zа-яА-Я](?=[a-zA-Zа-яА-Я])| )(?!.*(?<!.{42,})(?:(?<=[a-zA-Zа-яА-Я]{2})[a-zA-Zа-яА-Я](?=[a-zA-Zа-яА-Я])| ))) ?/);
      text[lastIndex] = temp[0];
      text[lastIndex + 1] = temp[1];
      lastIndex++;
    }
    console.log('text', text);
    return text.join("\n");
  }

  const hyphen = document.querySelectorAll('.hyphen');

  hyphen.forEach(item => {
    const text = createLineBreaks(item.innerHTML);
    item.innerHTML = text;
    console.log(item.innerHTML);
  })*/

  header();
  tabs();
  video();
  faq();
  categoriesFilter();
  card();
  slider();
  production();
  products();
  articles();
  readyProjects();
});

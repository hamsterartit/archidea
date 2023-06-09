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

$('.hyphen').hyphenate('en-us').hyphenates();

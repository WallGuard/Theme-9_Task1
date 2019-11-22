function preview (value) {
  let text;
  console.log('test value',value);
  text = value.replace(/\*\*.+?\*\*/g,'<b>$&</b>').replace(/\*\*/g, '');
  text = text.replace(/#.+?[\s,\n]/g, '<h1>$&</h1>').replace(/<h1>#/g,'<h1>');
  text = text.replace(/\n/g, '<br>');
  document.getElementById('preview').innerHTML = '<p class="preview__form-text">' + text + '</p>';
}

const textareas = document.querySelectorAll('[data-resize]');

textareas.forEach(textarea => {
  let textareaHeight = textarea.offsetHeight;
  textarea.addEventListener('input', e => {
    let that = e.target;

    that.style.height = textareaHeight + 'px';
    that.style.height = that.scrollHeight + 'px';
  });
});

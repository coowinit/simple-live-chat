const $ = s => document.querySelector(s);
const panel = $('#cwPanel'), launcher = $('#cwLauncher'), messages = $('#cwMessages'), input = $('#cwInput');

const replies = {
  'Decking': 'We offer co-extruded WPC decking in multiple colors, textures and sizes. Tell us your project type and required quantity, and we can recommend suitable models.',
  'Wall Cladding': 'We offer outdoor WPC wall cladding in different profiles, colors and wood-grain finishes. We can also recommend options based on your façade design.',
  'Fence': 'We provide WPC fencing systems for privacy, decorative and residential applications, including matching posts and accessories.',
  'Get a Quote': 'Sure. Please send the product, quantity, destination country or port, and any size or color requirements. We can prepare a quotation for you.',
  'Sample Request': 'Samples are available. Please tell us which product, color or finish you are interested in and your delivery country.'
};

function openChat(open) {
  panel.hidden = !open;
  launcher.hidden = open;
  launcher.setAttribute('aria-expanded', open);
  if (open && window.matchMedia('(min-width: 601px)').matches) input.focus();
}

function addMessage(text, mine = false) {
  const el = document.createElement('div');
  el.className = 'cw-message' + (mine ? ' cw-me' : '');
  el.innerHTML = '<p></p><small>' + (mine ? 'You' : 'COOWIN Support') + '</small>';
  el.querySelector('p').textContent = text;
  messages.append(el);
  messages.scrollTop = messages.scrollHeight;
}

launcher.onclick = () => openChat(true);
$('#cwClose').onclick = () => openChat(false);

$('#cwQuick').onclick = e => {
  if (e.target.tagName !== 'BUTTON') return;
  const text = e.target.textContent;
  addMessage(text, true);
  addMessage(replies[text]);
};

$('#cwForm').onsubmit = e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, true);
  input.value = '';
};

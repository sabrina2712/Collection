console.log(window.$)

// jQuery
const firstParagraph = $('h1 + p'); // { length: 0 }

console.log(firstParagraph)

if (firstParagraph.length) {
    console.log('there is one p')
} else {
    console.log('there is no p like that')
}

// parent() parents()
// next()
// sublings()

const parent = firstParagraph.parent('.active')
const nextParagraph = firstParagraph.siblings('.block') // 1
// const nextParagraph = firstParagraph.next('.block') // 0


const headline = $('h1');
headline.text('Hello, world from text') // el.innerText = 'New...'

console.log(headline.text());
headline.html('<em>Hello</em>, world') // el.innerHTML = 'New...'

console.log(headline.html());

$('a').attr('href', 'site.com') // .attr() setter
console.log($('a').attr('href')); // getter

$('h1').addClass('active') // el.classList.add('className')

setTimeout(() => {
    // headline.removeClass('active') // el.classList.remove('className')
    headline.toggleClass('active') // el.classList.toggle('className')
}, 2000)


// Use the event by name
$('h1').click(() => { // el.addEventListener('click', () => {})
    console.log('click')
});

// add on ehandler for multiple events
// $('h1').on('click scroll dbclick', () => {console.log('click')})

console.log($('p')) // 
// No need for `for` loop
$('p').click(() => {
    console.log('paragraph was clicked')
})

// vanilla JS
const p = document.querySelectorAll('p') // Array like list
for (let index = 0; index < p.length; index++) {
    const element = p[index];

    element.addEventListener('click', () => {
        console.log('paragraph was clicked VANILLA')
    })
}

if (headline.hasClass('active')) {
    console.log('yes class is here')
} // el.classList.contains('active')

// Vanilla JS
const newEl = document.createElement('div');
newEl.classList.add('page')
newEl.classList.add('hero')

newEl.innerText = 'Some text...'
document.body.appendChild(newEl);

// newEl.classList.add('vanilla')
// setTimeout(() => {
    // newEl.style.position = 'relative';
    // newEl.style.opacity = 1;
    // newEl.style.visibility = 'visible';
// }, 1000)

// Animate Showing and hiding elements
newEl.classList.add('jquery')
$(newEl).fadeIn(2000, () => { // show()
    console.log('el fully visible')
    $(newEl).fadeOut() // hide()
});

$("<div>", {
    "class": "test page",
    text: "Click me!",
    click: function() {
      $(this).toggleClass( "test" );
    }
  })
    .appendTo( "body" );


$('.content-block p').slideDown(7000, () => {
    console.log('slided');
})

// Vanilla JS
const firstParagraphVanilla = document.querySelector('h1 + p.large-text');

if (firstParagraphVanilla) {
    console.log('ther is value')
} else {
    console.log('NO values :(')
}

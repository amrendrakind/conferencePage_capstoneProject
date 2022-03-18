import data from './speakerData.js';

const { speakers } = data;
const speakersList = document.getElementById('speakers-list');
const morebtn = document.getElementById('more-btn');
const mobileMenu = document.querySelector('.mobile_menu_button');
const closeMenu = document.querySelector('#close-menu');

let speakersToShow = speakers;

window.onload = () => {
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  }
  speakersToShow.reverse().forEach((speaker) => {
    const speakerHTML = `<article class="speaker">
                            <img src=${speaker.picture} alt="${speaker.name}"/>
                            <div class="desc">
                                <p href="#" class="speaker-name">${speaker.name}</p>
                                <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                <p href="#" class="speaker-job">${speaker.workplace}</p>
                                <p class="speaker-desc">${speaker.description}</p>
                            </div>
                         </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
};
window.addEventListener('resize', () => {
  document.getElementById('more-btn').classList.remove('hide');
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  } else {
    speakersToShow = speakers;
  }
  speakersToShow.forEach((speaker) => {
    const speakerHTML = `<article class="speaker clearfix">
                                <img src=${speaker.picture} alt="${speaker.name}"/>
                                <div class="desc">
                                    <p href="#" class="speaker-name">${speaker.name}</p>
                                    <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                    <p href="#" class="speaker-job">${speaker.workplace}</p>
                                    <p class="speaker-desc">${speaker.description}</p>
                                </div>
                        </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
});

morebtn.addEventListener('click', () => {
  speakersList.innerHTML = '';
  speakers.reverse().forEach((speaker) => {
    const speakerHTML = `<article class="speaker clearfix">
                                  <img src=${speaker.picture} alt="${speaker.name}"/>
                                  <div class="desc">
                                      <p href="#" class="speaker-name">${speaker.name}</p>
                                      <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                      <p href="#" class="speaker-job">${speaker.workplace}</p>
                                      <p class="speaker-desc">${speaker.description}</p>
      
                                  </div>
                          </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
    document.getElementById('more-btn').classList.add('hide');
  });
});

mobileMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'hidden';
});

closeMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'auto';
});
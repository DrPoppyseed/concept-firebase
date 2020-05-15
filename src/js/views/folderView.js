import { elements } from './base';

export const addNote = () => {
    const markup = `
        <div class='notes-item swiper-slide'>
            <h2 class='text-header'></h2>
            <p class='text-body'></p>
        </div>
    `;
    elements.notesContainer.insertAdjacentHTML('beforeend', markup);
}


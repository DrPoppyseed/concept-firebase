import uniqid from 'uniqid';
import { elements } from './base';

export const addNote = (uid, callback) => {
    $('.notes-add').unbind('click').click(function() {
        var id = uniqid();
        console.log(`newly created noteID: ${id}`)
        const markup = 
            `
            <div class='notes-item swiper-slide' id='${id}'>
                <p class='notes-item-title'></p>
            </div>
            `;
        elements.notesContainer.insertAdjacentHTML('beforeend', markup);
        console.log('note added')
        callback(uid, id);
    });
}

export const openNote = () => {
    $('.notes-item').unbind('click').click(function() {
        var noteID = $(this).closest('.notes-item').attr('id');

        console.log(noteID);
    });
};

export const deleteNote = () => {
    // code inspi
}

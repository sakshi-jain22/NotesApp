import { Instance, types } from 'mobx-state-tree';
import { toJS } from 'mobx';

import { INotesItem } from 'src/types';

import { NotesModel } from './NotesStore/notesStore';

export const RootStoreModel = types
  .model('RootStore')
  //   .extend(withEnvironment)
  .props({ Notes: types.array(NotesModel) })
  .volatile(() => ({}))
  .actions((self) => {
    return {
      addNote: (note: INotesItem) => {
        const newNote = NotesModel.create({
          title: `${note.title}`,
          note: `${note.note}`,
          date: `${note.date}`,
          id: `${note.date}`,
          showImage: false,
          imagePath: null,
        });

        self.Notes.push(newNote);
      },
      updateNote: (note: INotesItem, id: string) => {
        const notesIndex = self.Notes.findIndex(
          (savedNote) => savedNote.id === id,
        );
        const updatedNote = NotesModel.create({
          title: `${note.title}`,
          note: `${note.note}`,
          date: `${note.date}`,
          id,
          showImage: false,
          imagePath: null,
        });

        if (notesIndex !== -1) {
          self.Notes.splice(notesIndex, 1);
          self.Notes.unshift(updatedNote);
        }
      },
      deleteNote: (id: string) => {
        const notesIndex = self.Notes.findIndex(
          (savedNote) => savedNote.id === id,
        );
        if (notesIndex !== -1) {
          self.Notes.splice(notesIndex, 1);
        }
      },
      sortByTimeCreated: () => {
        // TODO: Need to test the sorting functionality.
        console.log('1. Notes in array: ', JSON.stringify(toJS(self.Notes)));

        self.Notes.sort((note1, note2) => {
          const date1 = new Date(note1.id);
          const date2 = new Date(note2.id);
          return date1 - date2;
        });
        console.log(
          '1. self.notes after sortByTimeCreated: ',
          JSON.stringify(toJS(self.Notes)),
        );
      },
      sortByTimeEdited: () => {
        console.log('2. Notes in array: ', JSON.stringify(toJS(self.Notes)));
        self.Notes.sort((note1, note2) => {
          const date1 = new Date(note1.date);
          const date2 = new Date(note2.date);
          return date1 - date2;
        });
        console.log(
          '2. self.notes after sortByTimeEdited: ',
          JSON.stringify(toJS(self.Notes)),
        );
      },
    };
  })
  .views((self) => ({
    get notesCount() {
      return self.Notes.length;
    },
  }));

export interface RootStore extends Instance<typeof RootStoreModel> {}

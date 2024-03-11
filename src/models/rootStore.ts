import { Instance, types } from 'mobx-state-tree';

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
    };
  })
  .views((self) => ({
    get notesCount() {
      return self.Notes.length;
    },
  }));

export interface RootStore extends Instance<typeof RootStoreModel> {}

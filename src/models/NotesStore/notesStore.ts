import { types, Instance } from 'mobx-state-tree';

import { withRootStore } from '../extensions/withRootStore';

const notesProps = {
  title: types.string,
  note: types.string,
  date: types.string,
  id: types.string,
  imagePath: types.maybeNull(types.string),
  showImage: types.optional(types.boolean, false),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notesVolatileProps = (self: any) => ({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notesActions = (self: any) => ({
  setNote: (note: string) => {
    self.note = note;
  },
  setTitle: (title: string) => {
    self.title = title;
  },
  setDate: (date: string) => {
    self.date = date;
  },
  setImagePath: (path: string) => {
    self.imagePath = path;
  },
  updateShowImage: (showImage: boolean) => {
    self.showImage = showImage;
  },
  setNoteData: ({
    note,
    title,
    date,
    path,
    showImage,
  }: {
    note: string;
    title: string;
    date: string;
    path: string;
    showImage: boolean;
  }) => {
    self.note = note;
    self.title = title;
    self.date = date;
    self.id = date;
    self.imagePath = path;
    self.showImage = showImage;
  },
});

export const NotesModel = types
  .model('NotesDataModel')
  .extend(withRootStore)
  .props(notesProps)
  .volatile(notesVolatileProps)
  .actions(notesActions);

export interface INotesStore extends Instance<typeof NotesModel> {}

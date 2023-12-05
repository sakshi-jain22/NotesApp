import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

export interface INotesItem {
  title: string;
  note: string;
  date: string;
  image?: ImageSourcePropType;
  showImage?: boolean;
  id: number;
}

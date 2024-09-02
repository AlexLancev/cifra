import { ListSectionsType } from 'types/ListSectionsType';

export const ListSectionsMenu: ListSectionsType[] = [
  { id: '1', icon: '', chapter: 'Задачи', toLink: '/tasks' },
  { id: '2', icon: '', chapter: 'Настройки', toLink: '/settings' },
  { id: '3', icon: '', chapter: 'О системе' },
];

export const ListSectionsSettings: ListSectionsType[] = [
  { id: '1', icon: '', chapter: 'Настройка 1' },
  { id: '2', icon: '', chapter: 'Настройка 2' },
];

export const ListSectionsTasks: ListSectionsType[] = [
  { id: '1', icon: '', chapter: 'Складской учёт' },
  { id: '2', icon: '', chapter: 'Учёт в производстве' },
];

export const ListSectionsAccountingProduction: ListSectionsType[] = [
  { id: '1', chapter: 'Акты инвентаризации' },
  { id: '2', chapter: 'Внутризаводские накладные (Приход)' },
  { id: '3', chapter: 'Внутризаводские накладные (Расход)' },
  { id: '4', chapter: 'Лимитные карты (Приход)' },
  { id: '5', chapter: 'Цеховая номенклатура' },
];

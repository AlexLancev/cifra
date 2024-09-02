import { ListSectionsType } from 'types/ListSectionsType';

export const ListSectionsMenu: ListSectionsType[] = [
  {
    id: '1',
    icon: 'img/svg/briefcase.svg',
    chapter: 'Задачи',
    toLink: '/tasks',
  },
  {
    id: '2',
    icon: 'img/svg/settings.svg',
    chapter: 'Настройки',
    toLink: '/settings',
  },
  { id: '3', icon: 'img/svg/sistem.svg', chapter: 'О системе' },
];

export const ListSectionsSettings: ListSectionsType[] = [
  { id: '1', icon: 'img/svg/house.svg', chapter: 'Настройка 1' },
  { id: '2', icon: 'img/svg/factory.svg', chapter: 'Настройка 2' },
];

export const ListSectionsTasks: ListSectionsType[] = [
  { id: '1', icon: 'img/svg/house.svg', chapter: 'Складской учёт' },
  {
    id: '2',
    icon: 'img/svg/factory.svg',
    chapter: 'Учёт в производстве',
    toLink: '/accounting-production',
  },
];

export const ListSectionsAccountingProduction: ListSectionsType[] = [
  { id: '1', chapter: 'Акты инвентаризации' },
  { id: '2', chapter: 'Внутризаводские накладные (Приход)' },
  {
    id: '3',
    chapter: 'Внутризаводские накладные (Расход)',
    toLink: '/invoices-search',
  },
  { id: '4', chapter: 'Лимитные карты (Приход)' },
  { id: '5', chapter: 'Цеховая номенклатура' },
];

import type { StaticImageData } from 'next/image';
import gustavImg from '../img/GUSTAV .webp';
import jengaImg from '../img/JENGA.webp';
import lavinImg from '../img/LAVIN.webp';
import sezarImg from '../img/Sezar Tower .webp';
import sitiStroginoImg from '../img/Сити Строгино.webp';
import domPravdyImg from '../img/Дом Правды .webp';
import upsideTechImg from '../img/Upside Tech .webp';
import tverskayaImg from '../img/Коммерческое помещение на Тверской .webp';
import eilerImg from '../img/Ресторан с террасой в бизнес-центре «Эйлер» .webp';
import gabPerovoImg from '../img/ГАБ в Перово .webp';

export type PropertyType = 'office' | 'retail' | 'building' | 'invest';

export interface Property {
  slug: string;
  title: string;
  tag: string;
  type: PropertyType;
  location: string;
  description: string;
  meta: { label: string; value: string }[];
  heroImage: string | StaticImageData;
  sourceSlug?: string;
}

export const properties: Property[] = [
  {
    slug: 'gustav',
    title: 'GUSTAV',
    tag: 'Офис',
    type: 'office',
    location: 'г. Москва, Ул. Складочная, вл. 6 · м. Савеловская',
    description: 'Кластер с террасами и light-industrial блоками. Лоты от 40 м².',
    meta: [
      { label: 'Готовность', value: 'IIIQ 2026' },
      { label: 'Класс', value: 'A' },
      { label: 'Цена / м²', value: 'от 350 000 ₽' },
      { label: 'Минимум', value: '23 млн ₽' }
    ],
    heroImage: gustavImg,
    sourceSlug: 'gustav'
  },
  {
    slug: 'siti-strogino',
    title: 'Сити Строгино',
    tag: 'Офис',
    type: 'office',
    location: 'Проезд №607, вл. 21 · м. Строгино',
    description: 'МФК у воды: офисы, отель, wellness и фудхолл.',
    meta: [
      { label: 'Готовность', value: 'IQ 2028' },
      { label: 'Класс', value: 'A' },
      { label: 'Цена / м²', value: 'от 290 000 ₽' },
      { label: 'Минимум', value: '9.8 млн ₽' }
    ],
    heroImage: sitiStroginoImg,
    sourceSlug: 'siti-strogino'
  },
  {
    slug: 'jenga',
    title: 'JENGA',
    tag: 'Офис',
    type: 'office',
    location: 'Полесский проезд, вл. 16 · м. Щукинская',
    description: '23-этажный небоскрёб с террасами и панорамами на набережную.',
    meta: [
      { label: 'Готовность', value: 'IIIQ 2028' },
      { label: 'Класс', value: 'A' },
      { label: 'Цена / м²', value: 'от 295 900 ₽' },
      { label: 'Минимум', value: '22.1 млн ₽' }
    ],
    heroImage: jengaImg,
    sourceSlug: 'jenga'
  },
  {
    slug: 'lavin',
    title: 'LAVIN',
    tag: 'Офис',
    type: 'office',
    location: 'Ильменский проезд 13/8 · м. Верхние Лихоборы',
    description: '10-этажный кластер WORKPLACE, лоты с террасами от 52 м².',
    meta: [
      { label: 'Готовность', value: 'IIIQ 2027' },
      { label: 'Класс', value: 'A' },
      { label: 'Цена / м²', value: 'от 208 100 ₽' },
      { label: 'Минимум', value: '13.8 млн ₽' }
    ],
    heroImage: lavinImg,
    sourceSlug: 'lavin-delovoy-klaster-v-verkhnikh-likhoborakh'
  },
  {
    slug: 'sezar-tower',
    title: 'Sezar Tower',
    tag: 'Офис',
    type: 'office',
    location: 'Москва-Сити, участок №20 · м. Деловой центр',
    description: 'Продажи целых этажей по ДКПБВ. Высота 52 этажа.',
    meta: [
      { label: 'Готовность', value: 'IIQ 2028' },
      { label: 'Площадь', value: '179 502 м²' },
      { label: 'Машиномест', value: '500' },
      { label: 'Статус', value: 'PRIME' }
    ],
    heroImage: sezarImg,
    sourceSlug: 'sezar-tower'
  },
  {
    slug: 'dom-pravdy',
    title: 'Дом Правды',
    tag: 'Инвест-лот',
    type: 'invest',
    location: 'ул. Правды 24 · м. Савеловская / Белорусская',
    description: 'Клубные офисы с сервисом 5* и исторической архитектурой.',
    meta: [
      { label: 'Готовность', value: 'I кв. 2028' },
      { label: 'Класс', value: 'Deluxe' },
      { label: 'Лоты', value: '30–1000 м²' },
      { label: 'Условия', value: 'Рассрочка 0%' }
    ],
    heroImage: domPravdyImg,
    sourceSlug: 'dom-pravdy'
  },
  {
    slug: 'upside-tech',
    title: 'Upside Tech',
    tag: 'Инвест-лот',
    type: 'invest',
    location: 'Сколково · рядом с Технопарком',
    description: 'Техкластер для R&D и инновационных производств.',
    meta: [
      { label: 'Корпуса', value: 'Alpha / Beta' },
      { label: 'Лоты', value: 'от 69.5 м²' },
      { label: 'Цена / м²', value: 'от 341 839 ₽' },
      { label: 'Стоимость', value: 'от 24.7 млн ₽' }
    ],
    heroImage: upsideTechImg,
    sourceSlug: 'upside-tech'
  },
  {
    slug: 'tverskaya-28',
    title: 'Тверская 28',
    tag: 'Street Retail',
    type: 'retail',
    location: 'Тверская ул., 28 · м. Маяковская',
    description: 'Флагман на первой линии. HQ, шоурум или гастро-проект.',
    meta: [
      { label: 'Площадь', value: '3 784 м²' },
      { label: 'Цена / м²', value: 'от 449 260 ₽' },
      { label: 'Стоимость', value: 'от 1.7 млрд ₽' },
      { label: 'Входы', value: '3 отдельных' }
    ],
    heroImage: tverskayaImg,
    sourceSlug: 'kommercheskoe-pomeshchenie-na-tverskoy'
  },
  {
    slug: 'eiler-restaurant',
    title: 'Ресторан в БЦ «Эйлер»',
    tag: 'Gastro Retail',
    type: 'retail',
    location: 'ул. Заречная 6/1 · м. Фили',
    description: 'Панорамный ресторан + 130 кВт мощности + зона разгрузки.',
    meta: [
      { label: 'Площадь', value: '1 068 м²' },
      { label: 'Терраса', value: 'Всесезонная' },
      { label: 'Цена / м²', value: '412 447 ₽' },
      { label: 'Стоимость', value: '440 млн ₽' }
    ],
    heroImage: eilerImg,
    sourceSlug: 'restoran-s-terrasoy-v-biznes-tsentre-eyler'
  },
  {
    slug: 'gab-perovo',
    title: 'ГАБ в Перово',
    tag: 'Доходный актив',
    type: 'invest',
    location: 'Зелёный проспект 19 · м. Перово',
    description: 'Готовый арендный бизнес со стрит-ритейлом и федеральными арендаторами.',
    meta: [
      { label: 'Площадь', value: '1 036 м²' },
      { label: 'Цена / м²', value: '501 495 ₽' },
      { label: 'Стоимость', value: '520 млн ₽' },
      { label: 'До метро', value: '100 м' }
    ],
    heroImage: gabPerovoImg,
    sourceSlug: 'gab-v-perovo'
  },
  {
    slug: 'level-zvenigorodskaya',
    title: 'Level Звенигородская',
    tag: 'Жилой комплекс',
    type: 'building',
    location: '3-й Силикатный пр-д · м. Народное ополчение',
    description: 'ЖК бизнес-класса с видами на Москву-реку и двором без машин.',
    meta: [
      { label: 'Готовность', value: 'IIQ 2028' },
      { label: 'Площади', value: '17–123 м²' },
      { label: 'Цена / м²', value: 'от 390 000 ₽' },
      { label: 'Стоимость', value: 'от 11.7 млн ₽' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80',
    sourceSlug: 'level-zvenigorodskaya'
  },
  {
    slug: 'level-michurinskiy',
    title: 'Level Мичуринский',
    tag: 'Жилой комплекс',
    type: 'building',
    location: 'Очаково-Матвеевское · м. Аминьевская',
    description: '13 корпусов с собственной школой, садами и охраняемым ландшафтом.',
    meta: [
      { label: 'Готовность', value: 'IIIQ 2028' },
      { label: 'Площади', value: 'от 35.8 м²' },
      { label: 'Цена / м²', value: 'от 550 000 ₽' },
      { label: 'Стоимость', value: 'от 22.2 млн ₽' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    sourceSlug: 'level-michurinskiy-'
  }
];


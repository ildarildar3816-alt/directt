export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  { id: 1, name: "Беспроводные наушники X1", description: "Отличное шумоподавление и чистый звук.", price: 12000 },
  { id: 2, name: "Умные часы Series 5", description: "Отслеживание активности и пульса.", price: 25000 },
  { id: 3, name: "Механическая клавиатура", description: "Свитчи Cherry MX Red, RGB подсветка.", price: 8500 },
  { id: 4, name: "Игровая мышь Pro", description: "Сенсор 16000 DPI, 6 дополнительных кнопок.", price: 4200 },
  { id: 5, name: "Монитор 27' 4K", description: "IPS матрица, 144Hz, HDR10.", price: 35000 },
  { id: 6, name: "Внешний SSD 1TB", description: "Скорость чтения до 1050 МБ/с.", price: 9000 },
  { id: 7, name: "Рюкзак для ноутбука", description: "Влагозащитный, вмещает ноутбуки до 15.6 дюймов.", price: 3000 },
  { id: 8, name: "Портативная колонка", description: "Водонепроницаемая колонка, до 20 часов работы.", price: 5500 },
  { id: 9, name: "Графический планшет", description: "Для рисования и дизайна, 8192 уровня нажатия.", price: 15000 },
  { id: 10, name: "Веб-камера 1080p", description: "С автофокусом и встроенным микрофоном.", price: 2800 },
  { id: 11, name: "Микрофон для подкастов", description: "Конденсаторный USB микрофон.", price: 6500 },
  { id: 12, name: "Коврик для мыши XXL", description: "Игровая поверхность 900x400мм.", price: 1200 },
];
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Separa los acentos de las letras
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
    .replace(/\s+/g, '-'); // Reemplaza espacios con guiones
};

import { tiendasData } from './data';

export const getCountryNameFromSlug = (slug: string) => {
    const tienda = tiendasData.find(t => slugify(t.pais) === slug);
    return tienda ? tienda.pais : slug;
};

export const getCityNameFromSlug = (slug: string, countrySlug: string) => {
    const tienda = tiendasData.find(t => slugify(t.pais) === countrySlug && slugify(t.ciudad) === slug);
    return tienda ? tienda.ciudad : slug;
};

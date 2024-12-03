import type { Schema, Struct } from '@strapi/strapi';

export interface TecnologiasTecnologias extends Struct.ComponentSchema {
  collectionName: 'components_tecnologias_tecnologias';
  info: {
    description: '';
    displayName: 'Tecnologias';
  };
  attributes: {
    Backend: Schema.Attribute.Enumeration<
      ['JavaScript', 'Python', 'Kotlin', 'Java', 'C#', 'Ruby', 'Php']
    >;
    Cloud: Schema.Attribute.Enumeration<
      ['Google Cloud', 'AWS', 'Azure', 'Digital Ocean', 'VPS']
    >;
    Framework: Schema.Attribute.Enumeration<
      [
        'Sass',
        'TailwindCss',
        'VueJS',
        'React',
        'NextJS',
        'Spring Boot',
        'Ktor',
        'Django',
        'Flask',
        'GIn',
        'Echo',
      ]
    >;
    Frontend: Schema.Attribute.Enumeration<
      ['Html - Css -JavaScript', 'Sass', 'VueJS', 'React', 'NextJS']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tecnologias.tecnologias': TecnologiasTecnologias;
    }
  }
}

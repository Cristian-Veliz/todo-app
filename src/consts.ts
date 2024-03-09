export const TODO_FILTERS = {
    ALL: 'All',
    ACTIVE: 'active',
    COMPLETED: 'completed'
   
} as const; // el as const es solo de lectura en typeScript

export const FILTER_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ALL}`,
    },
    [TODO_FILTERS.COMPLETED]: {
     literal: 'Completados',
     href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const

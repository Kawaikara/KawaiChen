export interface Chapter {
  id: string;
  index: string;
  label: string;
  title: string;
  body: string;
  detail: string;
}

export const chapters: Chapter[] = [
  {
    id: 'compose',
    index: '01',
    label: 'COMPOSE',
    title: 'Start with a quiet, dependable foundation.',
    body: 'Use the documentation shell when structure matters. Step outside it when the page needs a distinct voice.',
    detail: 'Layouts / tokens / metadata',
  },
  {
    id: 'animate',
    index: '02',
    label: 'ANIMATE',
    title: 'Hydrate only the experience that needs motion.',
    body: 'This page is a React island. The rest of the project remains Astro-first, static, and independent of its runtime.',
    detail: 'React / Motion / islands',
  },
  {
    id: 'extend',
    index: '03',
    label: 'EXTEND',
    title: 'Keep the escape hatch open.',
    body: 'Bring your own rendering tools, animation system, and visual language without forking the documentation core.',
    detail: 'Canvas / WebGL / anything next',
  },
];

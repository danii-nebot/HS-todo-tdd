import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MovieCard from '../MovieCard.vue';

describe('MovieCard.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: {},
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});

// TODO: test prop movie's values are rendered correctly

// TODO: rest computed from prop favoriteMovie is rendering the 😍 emoji when the prop movie's id is matching

// TODO: test event favorite-selected is being emitted on button click

// TIP: use "wrapper.emitted()" for the assertion
// Read more here: https://v1.test-utils.vuejs.org/api/wrapper/emitted.html

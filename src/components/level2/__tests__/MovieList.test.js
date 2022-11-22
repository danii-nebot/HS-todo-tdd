import { expect, it, describe, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import MovieCard from '../MovieCard.vue';
import dataService from '../utils/dataService';

describe('MovieList.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MovieList);

    expect(wrapper.exists()).toBe(true);
  });

  // test in isolation using spies, mocks & stubs
  it('should render movie list', async () => {
    const mockedMovieList = [{}, {}];
    const spy = vi
      .spyOn(dataService, 'getMovies')
      .mockReturnValue(mockedMovieList);

    const wrapper = shallowMount(MovieList);
    const movieCards = wrapper.findAllComponents(MovieCard);
    expect(spy).toBeCalledTimes(1);
    expect(movieCards.length).toBe(mockedMovieList.length);
  });

  // TODO: write this test!
  it('should have no favorite movie by default', async () => {
    const wrapper = shallowMount(MovieList);
    // find select element and assert it has no selected option
  });

  // TODO: TDD time!
  // Make this test pass by adding the missing functionality in the MovieList.vue component
  // TODO: After you made the test pass, rework the test so it follows best practices
  it('should update favorite movie on favorite-selected event received', async () => {
    const wrapper = mount(MovieList);
    const movieCard = wrapper.findAllComponents(MovieCard)[0];
    await movieCard.vm.$emit('favorite-selected', 'eeaao2022');
    await wrapper.vm.$nextTick();
    const select = wrapper.find('option:checked');
    expect(select.exists()).toBeTruthy();
  });
});

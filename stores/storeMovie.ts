export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([] as iMovie[]);
  const isLoad = ref(false);

  const searchMovies = async (title: string) => {
    isLoad.value = true;
    try {
      movies.value = await $fetch('/api/movies', {
        method: 'GET',
        query: { title },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in search:', error);
    } finally {
      isLoad.value = false;
    }
  };

  const getMovieById = async (id: string): Promise<iMovie | null> => {
    isLoad.value = true;
    try {
      return await $fetch('/api/movies', {
        method: 'GET',
        query: { id },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in search:', error);
      return null;
    } finally {
      isLoad.value = false;
    }
  };
  return {
    movies,
    isLoad,
    searchMovies,
    getMovieById,
  };
});

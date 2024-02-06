import { H3Event } from 'h3';
import { MoviesApiService } from '~/server/utils/MovieApiService';

export default defineEventHandler(async (event: H3Event) => {
  const params = getQuery(event);
  if (params.title) {
    return await MoviesApiService.searchMoviesByTitle(params.title as string);
  }
  if (params.id) {
    return await MoviesApiService.searchMovieById(params.id as string);
  }

  return undefined;
});

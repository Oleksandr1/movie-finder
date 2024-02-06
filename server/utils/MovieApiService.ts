abstract class movieService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static searchMoviesByTitle(title: string): Promise<iMovie[]> {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static searchMovieById(id: string): Promise<iMovie | null> {
    throw new Error('Method not implemented.');
  }
}

export class MoviesApiService extends movieService {
  static url = `${process.env.MOVIE_API_URL}?apikey=${process.env.MOVIE_API_KEY}`;

  static async searchMoviesByTitle(title: string): Promise<iMovie[]> {
    try {
      if (!title) {
        return [] as iMovie[];
      }
      const response = await fetch(`${this.url}&type=movie&plot=full&s=${title}`);

      const data: iApiResponse = await response.json();
      if (data.Response === 'False') {
        return [] as iMovie[];
      }
      return data.Search as iMovie[];
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in search:', error);
      return [];
    }
  }

  static async searchMovieById(id: string): Promise<iMovie | null> {
    try {
      const response = await fetch(`${this.url}&plot=full&i=${id}`);
      const data: iMovie = await response.json();
      return data as iMovie;
    } catch (error) {
      return null;
    }
  }
}

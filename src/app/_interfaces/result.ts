import { Article } from './article';

export interface Result {
    status: string;
    totalResults: string;
    articles:Article[];
}


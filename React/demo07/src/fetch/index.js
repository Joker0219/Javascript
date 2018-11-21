import { get, del, post, put } from './config';

const COMMON_URL = 'http://localhost:8080/';

export const getAllBooks = () => get(COMMON_URL+'getAllBooks');
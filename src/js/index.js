console.log("Hi, my name is Ukyo!"); // eslint-disable-line no-console

/**
 * Getting in to Javascript : Kyle Simpson
 */

import BookShelf from "./Courses/getting-into-javascript/exercises/three-pillars/ex.js";

const fictionShelf = new BookShelf();

fictionShelf.loadBooks(fictionShelf);

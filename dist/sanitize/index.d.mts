import sanitizeHtml from 'sanitize-html';

declare const sanitize: (html: string, options?: sanitizeHtml.IOptions) => string;

export { sanitize };

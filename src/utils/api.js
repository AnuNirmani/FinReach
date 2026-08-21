const DEFAULT_API_BASE_URL = 'http://localhost/WNL-Web/public/api';

const configuredBase =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_BASE ||
    DEFAULT_API_BASE_URL;

const normalizedWithApi = /\/api\/?$/i.test(configuredBase)
    ? configuredBase
    : `${configuredBase.replace(/\/+$/, '')}/api`;

export const API_BASE_URL = (
    normalizedWithApi
).replace(/\/+$/, '');

export const buildApiUrl = (path = '') => {
    const normalizedPath = String(path).replace(/^\/+/, '');
    return `${API_BASE_URL}/${normalizedPath}`;
};

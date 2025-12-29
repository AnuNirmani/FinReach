import { useEffect, useState } from 'react';

const rawBase = import.meta.env.VITE_API_BASE || '';
const API_BASE = rawBase.replace(/\/$/, '');

const ensureAbsoluteUrl = (url) => {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  // Prefix relative paths (e.g., /storage/...) with API base
  return `${API_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
};

export const useMeta = (metaId) => {
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    if (!metaId) {
      setLoading(false);
      return () => { active = false; };
    }

    setLoading(true);
    fetch(`${API_BASE}/api/meta/id/${metaId}`)
      .then(async (res) => {
        const contentType = res.headers.get('content-type') || '';
        if (!res.ok || !contentType.includes('application/json')) {
          throw new Error(`Bad response (${res.status}) or non-JSON content-type`);
        }
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        if (data && typeof data === 'object') {
          const mapped = {
            ...data,
            og_image: ensureAbsoluteUrl(data.og_image),
          };
          setMeta(mapped);
        } else {
          setMeta({});
        }
        setLoading(false);
      })
      .catch((err) => {
        if (!active) return;
        console.error(`Error fetching metadata for ${metaId}:`, err);
        setMeta({});
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [metaId]);

  return { meta, loading };
};

from flask_caching import Cache

cache = Cache()


def clear_cache(key_prefix):
    keys = [key for key in cache.cache._cache.keys() if key.startswith(key_prefix)]
    cache.delete_many(*keys)

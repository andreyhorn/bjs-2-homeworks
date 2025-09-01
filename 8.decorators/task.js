//Задача № 1
function cachingDecoratorNew(func) {
    const cache = {};

    return function (...args) {
        const hash = md5(args);
        if (hash in cache) {
            console.log("Из кеша: " + cache[hash]);
            return "Из кеша: " + cache[hash];
        }
        const result = func(...args);
        cache[hash] = result;
        if (Object.keys(cache).length > 5) {
            const firstKey = Object.keys(cache)[0];
            delete cache[firstKey];
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0

    function wrapper(...args) {
        wrapper.allCount++;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    }

    return wrapper;
}

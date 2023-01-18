const fetcher = (...args) => {
    console.log('fetcher', args);
    return fetch(...args).then(async res => {
        let payload;
        try {
            if (res.status === 204) return null; // 204 does not have body
            payload = await res.json();
        } catch (e) {
            /* noop */
        }
        if (res.ok) {
            return payload;
        } else {
            return Promise.reject(
                payload.error || new Error('Something went wrong')
            );
        }
    });
};

const updater = (url, data) => {
    console.log('updater', data);
    const params: any = {
        method: 'POST',
        body: JSON.stringify(data),
    };
    return fetch(url, params).then(async res => {
        let payload;
        try {
            if (res.status === 204) return null; // 204 does not have body
            payload = await res.json();
        } catch (e) {
            /* noop */
        }
        if (res.ok) {
            return payload;
        } else {
            return Promise.reject(
                payload.error || new Error('Something went wrong')
            );
        }
    });
};

export {fetcher, updater};

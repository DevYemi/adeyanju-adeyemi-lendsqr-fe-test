// Create a debounce function
export function createDebounceFunc(cb: Function, delay: number) {
    let timeoutRef: null | NodeJS.Timeout = null;


    return function (...args: any[]) {
        // console.log(arguments)
        if (timeoutRef) {
            clearTimeout(timeoutRef);
        }

        timeoutRef = setTimeout(() => {
            cb.apply(null, args)
            clearTimeout(timeoutRef!);
            timeoutRef = null
        }, delay)

    }
}